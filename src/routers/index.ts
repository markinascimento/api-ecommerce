import { Router } from "express";
import { usersRouter } from "./usersRouter";

export const routers = Router();

routers.use("/users", usersRouter);
