import "dotenv/config";
import express from "express";
import { routers } from "./routers";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("")
  .then(() => {
    app.use("/api/v1", routers);
    app.use(express.json());
  })
  .catch((err) => console.log(`❌ Error to connect in database ${err}`));

export { app };
