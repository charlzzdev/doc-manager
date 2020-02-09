import { NextApiRequest, NextApiResponse } from 'next';

import connectDb from '../../db/connectDb';
import docWithCollectionName from '../../db/models/Doc';

connectDb();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = JSON.parse(req.body);

  if (!reqBody.text.trim()) {
    res.status(400).json({
      status: 'error',
      message: 'Tried to save an empty document.'
    });
    return;
  }

  try {
    const Doc = docWithCollectionName(reqBody.email);
    const docModel = new Doc({
      text: reqBody.text.trim(),
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
