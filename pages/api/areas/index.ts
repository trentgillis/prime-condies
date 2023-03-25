import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from '@/lib/db/prisma';
import { getAreaWeather } from '@/lib/utils/openWeatherMap';
import { redisClient } from '@/lib/db/redis';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
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
        const id: string = area._id.$oid;

        const cache = await redisClient.get(id);
        if (cache) return JSON.parse(cache);

        const [lon, lat] = area.location.coordinates;
        const areaWeather = await getAreaWeather(lat, lon);

        const data = { ...area, weather: areaWeather.data };
        await redisClient.set(id, JSON.stringify(data));

        return data;
      })
    );

    return res.json(data);
  } catch {
    return res.status(500).json({ status: 500, message: 'Internal server error' });
  }
});

export default handler;
