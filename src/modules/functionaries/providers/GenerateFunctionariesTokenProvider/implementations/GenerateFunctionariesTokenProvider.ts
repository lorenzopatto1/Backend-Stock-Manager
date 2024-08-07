import authConfig from "@config/auth";
import { sign } from "jsonwebtoken";
import IGenerateTokenProvider from "../models/IGenerateFunctionariesTokenProvider";

class GenerateFunctionariesTokenProvider implements IGenerateTokenProvider {
  public async execute(id: string) {
    const { secret, expiresIn } = authConfig.functionaryJwt;

    const token = sign({}, secret, {
      subject: id,
      expiresIn,
    });
    return token;
  }
}

export default GenerateFunctionariesTokenProvider;
