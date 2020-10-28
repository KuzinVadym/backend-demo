import pino from 'pino';

import { ILogger } from '../interfaces/ILogger';
import {ICreateTodoPayload} from "../interfaces/handlers/ICreateTodoPayload";
import {IResponse} from "../interfaces/handlers/IResponse";
import {Todo} from "../interfaces/models/Todo";

export class TodosRestHandler {
  private logger: ILogger;
  private getState;

  constructor(getState) {
    this.logger = pino();
    this.getState = getState;
  }

  async readTodos(): Promise<IResponse<Todo[]>> {
    try {
      this.getState().grpc.clients['Todo'].readTodos({}, (err, response) => {
        console.log("read the todos from server " + JSON.stringify(response));
      });
      return { success: true, data: [], status: 200 };
    } catch (error) {
      this.logger.error(error);
      return { error: new Error('An internal server error occurred.'), status: 400 };
    }
  }

  async createTodo(payload: ICreateTodoPayload): Promise<IResponse<Todo>> {
    try {

      this.getState().grpc.clients['Todo'].createTodo(payload, (err, response) => {
        console.log("Recieved from server " + JSON.stringify(response))
      });

      return { success: true, data: payload, status: 200 };
    } catch (error) {
      this.logger.error(error);
      return { error: new Error('An internal server error occurred.'), status: 400 };
    }
  }
}
