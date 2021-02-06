import pino from 'pino';
import { ILogger } from '../../../interfaces/structural';
import {IResponse} from "../../../interfaces/resolvers/IResponse";
import {IPayment} from "../../../interfaces/entyties";

export class PaymentsRestResolver {
    private logger: ILogger;

    constructor(private getState) {
        this.logger = pino();
    }

    public async savePayments(payload: IPayment): Promise<IResponse<IPayment>> {
        console.log('payload');
        console.log(payload);
        return { success: true, data: payload, status: 200 };
    }

}
