import { Router } from 'express';

export type IMainRoutes = (getState) => Router;

export interface IAppServer {
  init: () => void;
  withRest: (MainRoutes: IMainRoutes) => void;
  listen: () => void;
}
