import { Router } from 'express';

export type IRouterBuilder = (RestRouter: Router, getState?) => Router;
