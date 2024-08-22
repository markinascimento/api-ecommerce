import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-use-case";
import type { ICreateUserRequestDTO } from "./create-user-dto";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const body: ICreateUserRequestDTO = request.body;
      await this.createUserUseCase.execute(body);
      return response.send(201);
    } catch (error) {
      console.log(error);
      return response.status(401);
    }
  }
}
