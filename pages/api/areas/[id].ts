// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import nc from 'next-connect';

import type AreaResponse from '@/lib/api/types/AreaResponse';
import AreaModel, { AreaDocument } from '@/lib/api/models/AreaSchema';
import { InternalServerError, ResponseError, MethodNotAllowedError, NotFoundError } from '@/lib/api/utils/errors';
import middleware from '@/lib/api/middleware';
import { getOneCallForecast } from '@/lib/api/utils/openWeatherMap/oneCall';

const handler = nc();

handler.use(middleware);
handler.get(async (req: NextApiRequest, res: NextApiResponse<AreaResponse | ResponseError>) => {
  // id represents the URL identifier given in the request, i.e. boulder-canyon in /api/areas/boulder-canyon
  const { id } = req.query;

  AreaModel.findOne({ areaId: id }, async (error: any, area: AreaDocument) => {
    // Fetch weather data from OpenWeatherMap one call API
    const [areaLon, areaLat] = area.location.coordinates;
    const { current, hourly, daily } = await getOneCallForecast(areaLat, areaLon);

    // Build area response object
    let areaRes: AreaResponse = { ...area.toObject(), current, hourly, daily };

    try {
      if (error) throw InternalServerError;

      if (area) {
        return res.status(200).json(areaRes);
      } else {
        throw NotFoundError;
      }
    } catch (e: any) {
      return res.status(e.status).json(e);
    }
  });
});

// Catch all other request methods and respond with method not allowed
handler.all((req: NextApiRequest, res: NextApiResponse<ResponseError>) => {
  return res.status(MethodNotAllowedError.status).json(MethodNotAllowedError);
});

export default handler;
