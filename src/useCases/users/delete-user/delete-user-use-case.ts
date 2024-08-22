import type { UsersRepository } from "../../../repositories/UsersRepository";

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(userId: string) {
    if (!userId) {
      throw new Error("Id the user not is defined");
    }

    return await this.usersRepository.delete(userId);
  }
}
