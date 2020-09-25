import * as config from 'config';
import { startServer } from './server';
import { LogConfig, ExpressConfig } from './types';

startServer(
  () => config.get<ExpressConfig>('express'),
  () => config.get<LogConfig>('log'),
);
