import ISettings from "./interfaces/ISettings";

export const settings: ISettings = {
    port: 3001,
    grpc: {
        clients: [],
        servers: ['Todo']
    }
};