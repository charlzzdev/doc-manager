import { NextApiRequest, NextApiResponse } from 'next';
import connectDb from '../../db/connectDb';
import bcrypt from 'bcryptjs';

import User from '../../db/models/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = JSON.parse(req.body);

  await connectDb();

  User.findOne({ email })
    .then((user: { email: string, password: string }) => {
      const resToIncorrectReq = () => {
        res.status(400).json({
          status: 'error',
          message: 'Email or password is incorrect.'
        });
      }

      if (!user) return resToIncorrectReq();

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          return res.status(200).json({
            status: 'success',
            message: 'Successfully logged in.',
            data: { email }
          });
        } else return resToIncorrectReq();
      });
    });
}