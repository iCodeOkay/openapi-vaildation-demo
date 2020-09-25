import { RouteHandler, AppDependencies } from './types';
import { buildPingHandler } from './handlers/ping';
import { buildPostCustomerHandler } from './handlers/postCustomerHandler';

export const getRouteHandlers = (appDependencies: AppDependencies): RouteHandler[] => {
  return [
    {
      type: 'get',
      route: '/ping',
      handler: buildPingHandler(appDependencies),
    },
    {
      type: 'post',
      route: '/customer',
      handler: buildPostCustomerHandler(appDependencies),
    },
  ];
};
