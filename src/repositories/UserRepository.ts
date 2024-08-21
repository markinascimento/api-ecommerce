import type { User } from "../entities/User";
import type { IUserImplements } from "../implementations/IUserImplements";

export class UserRepository implements IUserImplements {
  async create(user: User): Promise<void> {}

  async delete(userId: string): Promise<void> {}

  async findAll(): Promise<User[]> {
    return [
      {
        email: "",
        id: "",
        name: "",
        password: "",
      },
    ];
  }

  async findByEmail(email: string): Promise<User> {
    return {
      email: "",
      id: "",
      name: "",
      password: "",
    };
  }

  async update(user: Omit<User, "id">, id: string): Promise<User> {
    return {
      email: "",
      id: "",
      name: "",
      password: "",
    };
  }
}
