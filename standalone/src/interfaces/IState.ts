import { ILogger } from './ILogger';
import {ServiceClient} from "@grpc/grpc-js/build/src/make-client";

export interface IGrpcClients {
  [name: string]: ServiceClient;
}

export interface IGrpc {
  clients?: IGrpcClients,
  servers?: any[]
}

export interface IState {
  logger?: ILogger;
  grpc?: IGrpc;
}
