import express, { Router } from 'express';

import { IRouterBuilder } from '../interfaces/IRouterBuilder';

export const usersRoutes: IRouterBuilder = (_getState): Router => {
  const router = express.Router();

  router.get('/', function(req, res, _next) {
    console.log("Get users list");
    res.json(true);
  });

  router.get('/:id', function(req, res, _next) {
    // const { id } = req.params;
    res.json(true)
  });

  return router;
};

