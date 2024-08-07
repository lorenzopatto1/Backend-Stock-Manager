import { inject, injectable } from "tsyringe";
import IFunctionariesRepository from "../repositories/IFunctionariesRepository";
import { Functionary } from "@prisma/client";
import AppError from "@shared/errors/AppError";

@injectable()
class GetFunctionaryService {
  constructor(
    @inject("FunctionariesRepository")
    private functionariesRepository: IFunctionariesRepository
  ) {}

  public async execute(id: string): Promise<Functionary> {
    const user = await this.functionariesRepository.findById(id);

    if (!user) {
      throw new AppError("Nenhum usuário encontrado", 400);
    }

    return user;
  }
}

export default GetFunctionaryService;
