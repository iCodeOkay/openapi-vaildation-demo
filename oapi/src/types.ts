import { RequestHandler } from 'express';
import { Logger } from 'pino';

export type ExpressConfig = {
  port: number;
};

export type LogConfig = {
  name: string;
  level: string;
};

export type AppDependencies = {
  logger: Logger;
};

export type RouteHandler = {
  type: 'get' | 'post' | 'delete' | 'patch';
  route: string;
  handler: RequestHandler;
};

export type RouteHandlerBuilder = (appDependencies: AppDependencies) => RequestHandler;
