import pino from 'pino';

import { settings } from './settings';
import { mainRoutes } from './routes';
// import resolvers from './resolvers/rest';
import AppServer from './service';

const logger = pino();

try {
    const appSrv = new AppServer(settings, logger);
    logger.info('Starting HTTP server');

    // Create application server (app)
    appSrv.init();

    // Calling hook for setting rest routers
    appSrv.withRest(mainRoutes);

    appSrv.listen();
} catch (e) {
    logger.error(e, 'An error occurred while initializing application.');
}