import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import { temp } from './proto'

import implementations from './implementations'

export function createGRPCClient(payload: string) {
    temp();
    const PROTO_PATH = `${__dirname}/proto/${payload.toLowerCase()}.proto`;

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
    const grpcObject = grpc.loadPackageDefinition(packageDefinition);
    const clientPackage = grpcObject[`${payload.toLowerCase()}Package`];

    return new clientPackage[payload]("localhost:40000",
        grpc.credentials.createInsecure())
}

export function createGRPCServer(payload: string) {
    const PROTO_PATH = `${__dirname}/proto/${payload.toLowerCase()}.proto`;

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
    const grpcObject = grpc.loadPackageDefinition(packageDefinition);
    const clientPackage = grpcObject[`${payload.toLowerCase()}Package`];

    const server = new grpc.Server();
    server.addService(clientPackage[payload].service, implementations[payload]);
    server.bindAsync("0.0.0.0:40000",
        grpc.ServerCredentials.createInsecure(), (err, port) => {
            if(err) console.log(`bind async error - ${err.message}`);
            console.log(`Port ${port} Successfully bound with - ${payload} - grpc Service`);
            server.start()
        });

    return server
}