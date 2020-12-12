import ISettings from "./interfaces/ISettings";

export const settings: ISettings = {
    port: process.env.PORT || "3001",
    grpc: {
        clients: [],
        servers: ['Todo']
    }
};