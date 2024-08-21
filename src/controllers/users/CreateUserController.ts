import type { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const body = request.body;
  }
}
