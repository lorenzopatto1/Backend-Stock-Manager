import authConfig from "@config/auth";
import { sign } from "jsonwebtoken";
import IGenerateTokenProvider from "../models/IGenerateMatrixesTokenProvider";

class GenerateMatrixesTokenProvider implements IGenerateTokenProvider {
  public async execute(id: string) {
    const { secret, expiresIn } = authConfig.matrixJwt;

    const token = sign({}, secret, {
      subject: id,
      expiresIn,
    });
    return token;
  }
}

export default GenerateMatrixesTokenProvider;
