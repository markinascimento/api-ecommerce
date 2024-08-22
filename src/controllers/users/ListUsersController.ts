import { UsersRepository } from "../../repositories/UsersRepository";
import { ListUsersController } from "../../useCases/users/list-users/list-users-controller";
import { ListUsersUseCase } from "../../useCases/users/list-users/list-users-use-case";

const usersRepository = new UsersRepository();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
