import { Logger as PinoLogger } from 'pino';

export type ILogger = PinoLogger;

export interface IState {
    logger?: ILogger;
}
