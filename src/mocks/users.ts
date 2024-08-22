import { v4 } from "uuid";
import type { User } from "../entities/User";

export let users: User[] = [
  {
    email: "ze@gmail.com",
    id: v4(),
    name: "zezin",
    password: "7894456",
  },
];
