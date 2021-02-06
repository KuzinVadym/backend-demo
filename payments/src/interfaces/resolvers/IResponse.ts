export interface IResponse<T = null> {
  data?: T;
  error?: Error;
  success?: boolean;
  status?: number;
}
