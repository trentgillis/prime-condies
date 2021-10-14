// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type AreaResponse from '@/lib/api/types/AreaResponse';

import nc from 'next-connect';

import middleware from '@/lib/api/middleware';
import AreaModel, { AreaDocument } from '@/lib/api/models/AreaSchema';
import { InternalServerError, ResponseError, MethodNotAllowedError, NotFoundError } from '@/lib/api/utils/errors';

const handler = nc();

handler.use(middleware);
handler.get(async (req: NextApiRequest, res: NextApiResponse<AreaResponse | ResponseError>) => {
  // id represents the URL identifier given in the request, i.e. boulder-canyon in /api/areas/boulder-canyon
  const { id } = req.query;

  AreaModel.findOne({ areaId: id }, (error: any, area: AreaDocument) => {
    // TODO: Build correct JSON response before sending it out
    // This seems useless right now but will be useful once interfacing with the OpenWeatherMap API
    const areaRes: AreaResponse = area;

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
