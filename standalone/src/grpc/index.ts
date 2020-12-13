import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";

export function createGRPCClient(payload: string) {
    const PROTO_PATH = `${__dirname}/proto/${payload.toLowerCase()}.proto`;

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
    const grpcObject = grpc.loadPackageDefinition(packageDefinition);
    const clientPackage = grpcObject[`${payload.toLowerCase()}Package`];

    return new clientPackage[payload]("localhost:40000",
        grpc.credentials.createInsecure())
}