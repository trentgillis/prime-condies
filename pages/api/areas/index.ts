import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from '@/lib/db/prisma';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const areas = await prisma.area.findRaw({
    filter: {
      location: {
        $near: {
          // TODO: Update to get lon/lat from req query params
          $geometry: { type: 'Point', coordinates: [-105.188846, 38.266731] },
        },
      },
    },
    options: {
      limit: 10,
    },
  });

  // TODO: Map over areas and append current weather data from OWM
  const data = areas;

  return res.status(200).json(data);
});

export default handler;
