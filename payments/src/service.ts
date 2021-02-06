import express, {Express} from "express";
import * as bodyParser from "body-parser";

import {Logger} from "pino";
import ISettings from "./interfaces/ISettings";
import { IState, IMainRoutes } from "./interfaces/structural";

export default class AppServer {
    private app: Express;
    private readonly logger: Logger;
    private readonly settings: ISettings;

    constructor(settings: ISettings, logger: Logger) {
        this.settings = settings;
        this.logger = logger;
    }

    public getState(): IState {
        return {
            logger: this.logger
        };
    }

    // create Koa application server
    public init(): void {
        this.logger.info('Init Express App');
        this.app = express();

        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    // listen server
    public withRest(mainRoutes: IMainRoutes): void {
        const getState = () => {
            return this.getState();
        };
        const mainRouter = mainRoutes(getState);
        this.app.use('/api', mainRouter);
    }

    // listen server
    public listen(): void {
        const port = this.settings.port;
        this.logger.info(`Application running on port: ${this.settings.port}`);
        this.app.listen(this.settings.port, () => {
            console.log(`==> 🌎 Listening on port %s. Open up http://127.0.0.1:${port} in your browser.`);
        });
    }
}
