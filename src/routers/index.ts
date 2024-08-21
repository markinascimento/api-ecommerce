import { Router } from "express";

export const routers = Router();

routers.get("/", (request, response) => {
  fetch("https://rickandmortyapi.com/api")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return response.json({ sucess: true });
});
