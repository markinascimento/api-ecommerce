import { Router } from "express";
import { User } from "../entities/User";

export const routers = Router();

routers.get("/", (request, response) => {
  const user = new User({
    email: "marcos@gmail.com",
    name: "marcos",
    password: "1234",
  });

  console.log(user);

  return response.json({ user });
});
