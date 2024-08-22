import { Router } from "express";
import { listUsersController } from "../controllers/users/ListUsersController";
import { createUserController } from "../controllers/users/CreateUserController";
import { deleteUserController } from "../controllers/users/DeleteUserController";

export const usersRouter = Router();

usersRouter.get("/", (request, response) => {
  return listUsersController.handler(request, response);
});

usersRouter.post("/", (request, response) => {
  return createUserController.handler(request, response);
});

usersRouter.delete("/:userId", (request, response) => {
  return deleteUserController.handler(request, response);
});
