import type { Request, Response } from "express";
import type { ListUsersUseCase } from "./list-users-use-case";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handler(request: Request, response: Response) {
    try {
      const users = await this.listUsersUseCase.execute();
      return response.json(users);
    } catch (error) {
      console.log(error);
    }
  }
}
