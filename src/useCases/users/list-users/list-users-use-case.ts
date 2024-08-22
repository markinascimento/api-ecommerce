import type { UsersRepository } from "../../../repositories/UsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  public async execute() {
    const users = await this.usersRepository.findAll();
    return users;
  }
}
