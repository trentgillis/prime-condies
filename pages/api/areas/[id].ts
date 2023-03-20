import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from '@/lib/db/prisma';
import { getAreaWeather } from '@/lib/utils/openweathermap';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;

  try {
    const area = await prisma.area.findUnique({ where: { id } });

    if (!area) return res.status(404).json({ status: 404, message: 'Area not found' });

    const [lon, lat] = area?.location?.coordinates;
    const areaCurrentWeather = await getAreaWeather(lat, lon);

    res.json({ ...area, weather: areaCurrentWeather.data });
  } catch {
    return res.status(500).json({ status: 500, message: 'Internal server error' });
  }
});

export default handler;
