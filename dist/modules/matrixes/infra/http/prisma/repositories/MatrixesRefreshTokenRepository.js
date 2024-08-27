"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../../../../../shared/errors/AppError"));
const database_1 = require("../../../../../../database");
const dayjs_1 = __importDefault(require("dayjs"));
const uuid_1 = require("uuid");
class MatrixesRefreshTokenRepository {
    findByRefreshToken(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield database_1.prisma.matrixRefreshToken.findFirst({
                where: {
                    id: refresh_token,
                },
            });
            if (!refreshToken) {
                throw new AppError_1.default("Você precisa estar logado", 401);
            }
            return refreshToken;
        });
    }
    create(matrixId) {
        return __awaiter(this, void 0, void 0, function* () {
            const expires_In = (0, dayjs_1.default)().add(15, "days").unix();
            const generateRefreshToken = yield database_1.prisma.matrixRefreshToken.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    matrix_Id: matrixId,
                    expires_In,
                },
            });
            return generateRefreshToken;
        });
    }
    delete(matrixId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.matrixRefreshToken.deleteMany({
                where: { matrix_Id: matrixId },
            });
        });
    }
}
exports.default = MatrixesRefreshTokenRepository;
