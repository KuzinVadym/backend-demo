
export interface IGRPC {
    clients?: string[];
    servers?: string[];
}

export default interface ISettings {
    port?: string;
    grpc?: IGRPC
}
