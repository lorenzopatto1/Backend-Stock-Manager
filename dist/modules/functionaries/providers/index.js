"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const GenerateFunctionariesTokenProvider_1 = __importDefault(require("./GenerateFunctionariesTokenProvider/implementations/GenerateFunctionariesTokenProvider"));
const FunctionariesRefreshTokenRepository_1 = __importDefault(require("../infra/http/prisma/repositories/FunctionariesRefreshTokenRepository"));
tsyringe_1.container.registerSingleton("GenerateFunctionariesTokenProvider", GenerateFunctionariesTokenProvider_1.default);
tsyringe_1.container.registerSingleton("FunctionariesRefreshTokenRepository", FunctionariesRefreshTokenRepository_1.default);
