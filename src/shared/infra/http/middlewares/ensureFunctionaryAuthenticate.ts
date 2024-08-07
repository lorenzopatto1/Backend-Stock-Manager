import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export default function ensureFunctionaryAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError("O usuário precisa estar logado", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, authConfig.functionaryJwt.secret);

    return next();
  } catch {
    throw new AppError("Você não tem autorização para acessar essa rota", 401);
  }
}
