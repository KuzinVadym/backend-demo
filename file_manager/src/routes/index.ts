import express, {Router} from "express";
import { usersRoutes } from './users';
import { IRouterBuilder } from "../interfaces/structural";

export const mainRoutes: IRouterBuilder = (getState): Router => {
    const router = express.Router();

    router.get('/health', function(req, res, next) {
        let data = {
            service: "File Manager",
            call: "Get",
            time: new Date().getMilliseconds()
        };
        res.status(200).json(data);
    });

    router.use(`/users`, usersRoutes(getState));

    return router;
};