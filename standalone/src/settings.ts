import ISettings from "./interfaces/ISettings";

export const settings: ISettings = {
    port: 3003,
    grpc: {
        clients: ['Todo'],
        servers: []
    }
};