import "dotenv/config";
import "express-async-errors";
import { errors } from "celebrate";
import "es6-shim";
import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import routes from "./routes";

import AppError from "../../errors/AppError";

import cors from "cors";

import "../../container";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://pdvgestaofacil.com.br"],
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);

app.use(errors());

const port = process.env.APP_PORT || 3000;

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  return response.status(500).json({ status: "error", messsage: err.message });
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
