import express, {Router} from "express";
import { usersRoutes } from './users';
import { IRouterBuilder } from "../interfaces/structural";

export const mainRoutes: IRouterBuilder = (getState): Router => {
    const router = express.Router();
    router.use(`/reports`, usersRoutes(getState));

    return router;
};