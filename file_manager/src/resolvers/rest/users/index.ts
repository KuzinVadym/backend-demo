import pino from 'pino';
import { ILogger } from '../../../interfaces/structural';
import {IResponse} from "../../../interfaces/resolvers/IResponse";
import {IUser} from "../../../interfaces/entyties";

export class UsersRestResolver {
    private logger: ILogger;

    constructor(private getState) {
        this.logger = pino();
    }

    public async saveUser(payload: IUser): Promise<IResponse<IUser>> {
        console.log('payload');
        console.log(payload);
        return { success: true, data: payload, status: 200 };
    }

}
