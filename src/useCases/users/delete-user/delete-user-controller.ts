import type { Request, Response } from "express";
import type { DeleteUserUseCase } from "./delete-user-use-case";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handler(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      await this.deleteUserUseCase.execute(userId);
      return response.sendStatus(204);
    } catch (error) {
      return response.status(401);
    }
  }
}
