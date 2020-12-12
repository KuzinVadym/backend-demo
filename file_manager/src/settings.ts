import ISettings from "./interfaces/ISettings";
import { config } from 'dotenv';

export const settings: ISettings = {
    port: process.env.PORT || "3333"
};
