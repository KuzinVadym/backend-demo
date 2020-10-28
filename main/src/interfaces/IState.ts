import { ILogger } from './ILogger';
import {ServiceClient} from "@grpc/grpc-js/build/src/make-client";

export interface IGrpc {
  clients?: ServiceClient[],
  servers?: any[]
}

export interface IState {
  logger?: ILogger;
  grpc?: IGrpc;
}
