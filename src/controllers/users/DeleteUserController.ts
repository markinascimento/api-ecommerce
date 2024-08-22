import { UsersRepository } from "../../repositories/UsersRepository";
import { DeleteUserController } from "../../useCases/users/delete-user/delete-user-controller";
import { DeleteUserUseCase } from "../../useCases/users/delete-user/delete-user-use-case";

const usersRepository = new UsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };
