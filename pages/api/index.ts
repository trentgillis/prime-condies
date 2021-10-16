// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ApiMessageData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiMessageData>) {
  res.status(200).json({ message: 'The condies are so prime!' });
}
