import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUserController } from "../../useCases/users/create-user/create-user-controller";
import { CreateUserUseCase } from "../../useCases/users/create-user/create-user-use-case";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
