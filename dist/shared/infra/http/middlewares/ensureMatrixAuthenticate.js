"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ensureMatrixAuthenticate;
const auth_1 = __importDefault(require("@config/auth"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureMatrixAuthenticate(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        throw new AppError_1.default("O usuário precisa estar logado", 401);
    }
    const [, token] = authToken.split(" ");
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, auth_1.default.matrixJwt.secret);
        const { sub } = decoded;
        request.matrix = { id: sub };
        return next();
    }
    catch (error) {
        throw new AppError_1.default("Você não tem autorização para acessar essa rota", 401);
    }
}
