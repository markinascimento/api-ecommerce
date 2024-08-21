import type { User } from "../entities/User";

export interface IUserImplements {
  findAll(): Promise<User[]>;

  findByEmail(email: string): Promise<User>;

  create(user: User): Promise<void>;

  update(user: Omit<User, "id">, id: string): Promise<User>;

  delete(userId: string): Promise<void>;
}
