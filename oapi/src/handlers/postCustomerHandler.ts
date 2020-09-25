import { Request, Response } from 'express';
import { RouteHandlerBuilder } from '../types';

export const buildPostCustomerHandler: RouteHandlerBuilder = () => async (req: Request, res: Response) => {
  // get email & validate
  const email = req.body.email as string;
  const height = req.body.height as number;

  // Imagine we're doing something with the data
  console.log(email);
  console.log(height);

  // return response
  res.json({
    message: 'Successfully processed record',
  });
};
