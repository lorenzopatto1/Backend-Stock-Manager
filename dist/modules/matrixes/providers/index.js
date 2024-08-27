"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const GenerateMatrixesTokenProvider_1 = __importDefault(require("./GenerateMatrixesTokenProvider/implementations/GenerateMatrixesTokenProvider"));
const MatrixesRefreshTokenRepository_1 = __importDefault(require("../infra/http/prisma/repositories/MatrixesRefreshTokenRepository"));
tsyringe_1.container.registerSingleton("GenerateMatrixesTokenProvider", GenerateMatrixesTokenProvider_1.default);
tsyringe_1.container.registerSingleton("MatrixesRefreshTokenRepository", MatrixesRefreshTokenRepository_1.default);
