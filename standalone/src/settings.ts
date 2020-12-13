import dotenv from 'dotenv';
import ISettings from "./interfaces/ISettings";

dotenv.config();

export const settings: ISettings = {
    port: process.env.PORT || "3001",
    grpc: {
        clients: ['Todo'],
        servers: []
    }
};