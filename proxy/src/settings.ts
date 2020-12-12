import ISettings from "./interfaces/ISettings";

export const settings: ISettings = {
    port: process.env.PORT || "3002",
};