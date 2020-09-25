import { Request, Response } from 'express';
import { RouteHandlerBuilder } from '../types';

export const buildPingHandler: RouteHandlerBuilder = () => async (_req: Request, res: Response) => {
  res.json({
    response: 'pong',
  });
};
