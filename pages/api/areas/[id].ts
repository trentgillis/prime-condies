import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from '@/lib/db/prisma';
import { getAreaWeather } from '@/lib/utils/openweathermap';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id as string;
  const area = await prisma.area.findUnique({ where: { id } });

  // TODO: Throw 404
  if (!area) return res.json({ no: 'bad' });

  const [lon, lat] = area?.location?.coordinates;
  const areaCurrentWeather = await getAreaWeather(lat, lon);

  res.json({ ...area, weather: areaCurrentWeather.data });
});

export default handler;
