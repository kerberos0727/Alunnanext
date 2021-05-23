export interface IError {
    readonly id: string;
    readonly message: string;
}
  
export class HttpErrorResponseModel implements IError {
  
    constructor(public id: string, public status: number = 0, public message: string = '') {}
}
  