import { User } from "../entities/User";
import type { IUserImplements } from "../implementations/IUserImplements";
import { users } from "../mocks/users";

export class UsersRepository implements IUserImplements {
  async findAll(): Promise<User[]> {
    return users;
  }

  async create(user: Omit<User, "id">): Promise<void> {
    const newUser = new User(user);
    users.push(newUser);
  }

  async delete(userId: string): Promise<void> {
    const itemIndex = users.findIndex((user) => user.id === userId);
    users.splice(itemIndex, 1);
  }

  async findByEmail(email: string): Promise<User> {
    return {
      email: "",
      id: "",
      name: "",
      password: "",
    };
  }

  async update(user: User, id: string): Promise<User> {
    return {
      email: "",
      id: "",
      name: "",
      password: "",
    };
  }
}
