import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from '@/lib/db/prisma';
import { getAreaWeather } from '@/lib/utils/openweathermap';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const areas = (await prisma.area.findRaw({
    filter: {
      location: {
        $near: {
          // TODO: Update to get lon/lat from req query params if they exist
          $geometry: { type: 'Point', coordinates: [-105.188846, 38.898925] },
        },
      },
    },
    options: {
      limit: 10,
    },
  })) as unknown as Prisma.JsonArray;

  const data = await Promise.all(
    areas.map(async (area: any) => {
      const [lon, lat] = area.location.coordinates;
      const areaWeather = await getAreaWeather(lat, lon);

      return { ...area, weather: areaWeather.data };
    })
  );

  return res.json(data);
});

export default handler;
