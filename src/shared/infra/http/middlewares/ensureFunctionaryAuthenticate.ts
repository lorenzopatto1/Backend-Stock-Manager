import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

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
    const decoded = verify(token, authConfig.functionaryJwt.secret);
    const { sub } = decoded as IToken;
    request.functionary = { id: sub };

    return next();
  } catch {
    throw new AppError("Você não tem autorização para acessar essa rota", 401);
  }
}
