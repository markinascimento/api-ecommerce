import type { UsersRepository } from "../../../repositories/UsersRepository";
import type { ICreateUserRequestDTO } from "./create-user-dto";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const { email, name, password } = data;

    if (!email) {
      throw new Error("E-mail is required");
    }

    if (!name) {
      throw new Error("Name is required");
    }

    if (!password) {
      throw new Error("Password is required");
    }

    await this.usersRepository.create({ email, name, password });
    return;
  }
}
