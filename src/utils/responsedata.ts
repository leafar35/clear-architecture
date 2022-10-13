/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from "@nestjs/common";

export default class ResponseData<T> {

  constructor(
    public successul: boolean,
    public message: string,
    public data: T
  ){}

  static successful<T>(data: T): ResponseData<T>{
    return new ResponseData<T>(true, '', data);
  }

  static failure<T>(message: string): ResponseData<T>{
    return new ResponseData<T>(false,  message, null);
  }

  static exception<T>(message: string, httpStatus: HttpStatus = HttpStatus.BAD_REQUEST){
    throw new HttpException(this.failure(message), httpStatus);
  }

  toJson(): any{
    return JSON.stringify(this);
  }

}