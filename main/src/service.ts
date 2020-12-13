import express, { Express } from 'express';
import * as bodyParser from 'body-parser';

import {Logger} from 'pino';
import ISettings from "./interfaces/ISettings";
import {createGRPCClient, createGRPCServer} from "./grpc";
import {IAppServer, IMainRoutes} from "./interfaces/IAppServer";
import {IState} from "./interfaces/IState";

export default class AppServer implements IAppServer{
    private app: Express;
    private grpc;
    private readonly logger: Logger;
    private readonly settings: ISettings;

    constructor(settings: ISettings, logger: Logger) {
        this.settings = settings;
        this.logger = logger;
        this.grpc = {};
    }

    public getState(): IState {
        return {
            logger: this.logger,
            grpc: this.grpc
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

    public withGRPC(): void {
        this.grpc.clients = this.settings.grpc.clients.map(connection => {
            return createGRPCClient(connection);
        });
        this.grpc.servers = this.settings.grpc.servers.map(connection => {
            return createGRPCServer(connection);
        });
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
