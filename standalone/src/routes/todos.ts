import express, { Router } from 'express';

import { IRouterBuilder } from '../interfaces/IRouterBuilder';
import {TodosRestHandler} from "../handlers/todos";


export const todosRoutes: IRouterBuilder = (getState): Router => {
  const router = express.Router();

  const todosHandler = new TodosRestHandler(getState);

  router.get('/', async (req, res, _next) => {
    const result = await todosHandler.readTodos();
    if (result.status === 200) {
      res.status(result.status).json(result.data);
    } else {
      res.status(result.status).json(result.error.message);
    }
  });

  router.post('/', async (req, res, _next) => {
    let userObj = req.body;
    const result = await todosHandler.createTodo(userObj);
    if (result.status === 200) {
      res.status(result.status).json(result.data);
    } else {
      res.status(result.status).json(result.error.message);
    }
  });

  return router;
};

