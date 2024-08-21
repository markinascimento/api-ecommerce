import type { User } from "../../entities/User";
import type { UserRepository } from "../../repositories/UserRepository";

type IDataProps = Omit<User, "id">;

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  public async execute(data: IDataProps) {
    // await this.usersRepository.delete();
    console.log("Dentro do UseCase => ", data);
  }
}
