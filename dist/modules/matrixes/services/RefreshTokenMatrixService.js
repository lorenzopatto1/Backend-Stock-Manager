"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const tsyringe_1 = require("tsyringe");
const IGenerateMatrixesTokenProvider_1 = __importDefault(require("../providers/GenerateMatrixesTokenProvider/models/IGenerateMatrixesTokenProvider"));
const dayjs_1 = __importDefault(require("dayjs"));
let RefreshTokenMatrixService = class RefreshTokenMatrixService {
    constructor(refreshTokenRepository, tokenProvider) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.tokenProvider = tokenProvider;
    }
    execute(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = yield this.refreshTokenRepository.findByRefreshToken(refresh_token);
            if (!refreshToken) {
                throw new AppError_1.default("Você precisa fazer o login novamente", 401);
            }
            const refreshTokenExpired = (0, dayjs_1.default)().isAfter(dayjs_1.default.unix(refreshToken.expires_In));
            const token = yield this.tokenProvider.execute(refreshToken.matrix_Id);
            if (refreshTokenExpired) {
                yield this.refreshTokenRepository.delete(refreshToken.matrix_Id);
                const newRefreshToken = yield this.refreshTokenRepository.create(refreshToken.matrix_Id);
                return { token, newRefreshToken };
            }
            return { token };
        });
    }
};
RefreshTokenMatrixService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("MatrixesRefreshTokenRepository")),
    __param(1, (0, tsyringe_1.inject)("GenerateMatrixesTokenProvider")),
    __metadata("design:paramtypes", [Object, IGenerateMatrixesTokenProvider_1.default])
], RefreshTokenMatrixService);
exports.default = RefreshTokenMatrixService;
