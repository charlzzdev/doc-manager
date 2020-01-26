import { NextApiRequest, NextApiResponse } from "next";

import connectDb from '../../db/connectDb';
import Doc from '../../db/models/Doc';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const filter = req.body ? JSON.parse(req.body).filter : {};

  const docs = await Doc.find(filter);

  res.json(docs);
}