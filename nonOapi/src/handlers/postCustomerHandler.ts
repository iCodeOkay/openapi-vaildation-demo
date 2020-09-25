import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { RouteHandlerBuilder } from '../types';

const isValidEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const buildPostCustomerHandler: RouteHandlerBuilder = () => async (req: Request, res: Response) => {
  // get email & validate
  const email = req.body.email;

  if (email === undefined) {
    res.status(StatusCodes.BAD_REQUEST).send('email needs to be supplied');
    return;
  }

  if (!isValidEmail(email)) {
    res.status(StatusCodes.BAD_REQUEST).send('email needs to be valid');
    return;
  }

  // get height & validate
  const height = req.body.height;

  if (!height) {
    res.status(StatusCodes.BAD_REQUEST).send('height needs to be supplied');
    return;
  }

  if (!Number.isInteger(height)) {
    res.status(StatusCodes.BAD_REQUEST).send('height needs to be an integer');
    return;
  }

  const heightNumber = height as number;

  // shortest person recorded in history (Chandra Bahadur Dangi) was 54.6cm
  if (heightNumber < 50) {
    res.status(StatusCodes.BAD_REQUEST).send('height needs to be more than 50cm');
    return;
  }

  // tallest person recorded in history (Robert Wadlow) was 272cm
  if (heightNumber > 275) {
    res.status(StatusCodes.BAD_REQUEST).send('height needs to be less than 275cm');
    return;
  }

  // Imagine we're doing something with the data
  console.log(email);
  console.log(height);

  // return response
  res.json({
    message: 'Successfully processed record',
  });
};
