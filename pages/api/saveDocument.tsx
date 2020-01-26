import { NextApiRequest, NextApiResponse } from 'next';

import connectDb from '../../db/connectDb';
import Doc from '../../db/models/Doc';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const text: String = JSON.parse(req.body).text.trim();

  if (!text) {
    res.status(400).json({
      status: 'error',
      message: 'Tried to save an empty document.'
    });
    return;
  }

  try {
    const docModel = new Doc({
      text,
      created: new Date().toJSON()
    });
    await docModel.save();

    res.status(200).json({
      status: 'success',
      message: 'The document has been saved successfully.'
    });

  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `There has been an error saving the document: ${err}.`
    });
  }
}
