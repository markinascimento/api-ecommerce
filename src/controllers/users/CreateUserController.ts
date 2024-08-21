import type { Request, Response } from "express";
import type { CreateUserUseCase } from "../../useCases/users/CreateUserUseCase";
import { User } from "../../entities/User";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const body = request.body;

    const user = new User({
      email: "marcos@gmail.com",
      name: "marcos",
      password: "1234",
    });

    await this.createUserUseCase.execute(user);
  }
}
