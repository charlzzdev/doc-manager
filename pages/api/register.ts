import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../db/connectDb';
import bcrypt from 'bcryptjs';

import User from '../../db/models/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();

  let { email, password } = JSON.parse(req.body);

  bcrypt.genSalt(10, (err: Error, salt: string) => {
    bcrypt.hash(password, salt, async (err: Error, hash: string) => {
      if (err) throw err;

      password = hash;

      try {
        const userModel = new User({
          email,
          password
        });
        await userModel.save();

        res.status(200).json({
          status: 'success',
          message: 'Successfully registered.'
        });

      } catch (err) {
        res.status(500).json({
          status: 'error',
          message: err
        });
      }
    });
  });
}