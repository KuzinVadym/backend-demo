import express, {Router} from "express";
import {IRouterBuilder} from "../interfaces/structural";
import {UsersRestResolver} from '../resolvers/rest'


export const usersRoutes: IRouterBuilder = (getState): Router => {
  const router = express.Router();

  const UsersResolver = new UsersRestResolver(getState);

  router.get('/', function(req, res, next) {
    getState().logger.info('Get Users List');
    res.status(200).json([{
      id: '1',
      name: 'user',
      bike: 'bike',
      phone: '017674833838',
      salary: '75000'
    }]);
  });

  router.get('/:id', function(req, res, next) {
    const { id } = req.params;

    getState().logger.info(`Get User By Id ${id}`);

    res.status(200).json({
      id,
      name: 'user',
      bike: 'bike',
      phone: '017674833838',
      salary: '75000'
    });
  });

  router.post('/', async (req, res, next) => {
    const userObj = req.body;
    const result = await UsersResolver.saveUser(userObj);
    if (result.success) {
      res.status(result.status).json(result.data);
    } else {
      res.status(result.status).json(result.error.message);
    }
  });

  router.put('/:id', function(req, res, next) {
    const { id } = req.params;
  });

  router.delete('/:id', function(req, res, next) {
    const { id } = req.params;
  });

  return router;
};



