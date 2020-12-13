import express, { Router } from 'express';

import {IRouterBuilder} from "../interfaces/IRouterBuilder";

import {usersRoutes} from './users';

export const mainRoutes: IRouterBuilder = (getState): Router => {
    const router = express.Router();

    router.get('/health', function(_req, res, _next) {
        let data = {
            service: "Main",
            call: "Get",
            time: new Date().getMilliseconds()
        };
        res.status(200).json(data);
    });

        router.use(`/users`, usersRoutes(getState));
    return router;
};


export default mainRoutes;