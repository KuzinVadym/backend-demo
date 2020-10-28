import express, { Router } from 'express';

import {IRouterBuilder} from "../interfaces/IRouterBuilder";

import {usersRoutes} from './users';

export const mainRoutes: IRouterBuilder = (getState): Router => {
    const router = express.Router();
    router.use(`/users`, usersRoutes(getState));

    router.get('/', function(_req, res, _next) {
        console.log("Get From Main!!");
        let data = {
            service: "Standalone",
            call: "Get",
            time: new Date().getMilliseconds()
        };
        res.json(data);
    });

    return router;
};


export default mainRoutes;