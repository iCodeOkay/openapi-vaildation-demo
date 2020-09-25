import * as pino from 'pino';
import * as cors from 'cors';
import * as express from 'express';
import * as httpStatusCode from 'http-status-codes';
import { getRouteHandlers } from './routes';
import { LogConfig, ExpressConfig } from './types';

//  we create our own wrapper to support rejected promises 'cause express doesn't support promises
const asyncWrapper = (fn: express.RequestHandler) => async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    return await fn(req, res, next);
  } catch (ex) {
    return next(ex);
  }
};

export const startServer = async (getExpressConfig: () => ExpressConfig, getLogConfig: () => LogConfig) => {
  // config
  const { port } = getExpressConfig();
  const logConfig = getLogConfig();

  const logger = pino(logConfig);

  const app = express();

  // middlewares

  // CORS validator needs to go before Open API Spec validator, otherwise CORS requests will be blocked
  // by middleware that checks request against Open API Spec.
  // More info here: https://stackoverflow.com/a/29954326/1383164
  app.use(cors());

  app.use(express.json());

  // routes
  getRouteHandlers({ logger }).forEach((routeHandler) =>
    app[routeHandler.type](routeHandler.route, asyncWrapper(routeHandler.handler)),
  );

  // error handlers
  app.use((req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.debug({ path: req.path }, 'Route not found');
    return res.status(httpStatusCode.NOT_FOUND).send();
  });

  app.use(
    (error: Error & { status: number }, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      logger.error({ error }, 'Unhandled error caught');
      res.status(error.status || httpStatusCode.INTERNAL_SERVER_ERROR).send();
    },
  );

  app.listen(port);
  logger.info(`Server listening on port ${port}`);
};
