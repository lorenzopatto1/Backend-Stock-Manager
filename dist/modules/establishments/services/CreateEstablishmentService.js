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
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
let CreateEstablishmentService = class CreateEstablishmentService {
    constructor(establishmentRepository, machineFeesRepository) {
        this.establishmentRepository = establishmentRepository;
        this.machineFeesRepository = machineFeesRepository;
    }
    execute(establishment) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishmentExists = yield this.establishmentRepository.findByMatrixId(establishment.matrix_Id);
            if (establishmentExists.length < 1) {
                establishment.type = client_1.EstablishmentEnum.Unique;
            }
            else {
                const changeEstablishmentType = establishmentExists.find((est) => est.type === client_1.EstablishmentEnum.Unique);
                if (changeEstablishmentType) {
                    yield this.establishmentRepository.update({
                        id: changeEstablishmentType.id,
                        type: client_1.EstablishmentEnum.Network,
                    });
                }
                establishment.type = client_1.EstablishmentEnum.Network;
            }
            const establishmentNameExists = establishmentExists === null || establishmentExists === void 0 ? void 0 : establishmentExists.find((establishmentDb) => establishmentDb.name === establishment.name);
            if (establishmentNameExists) {
                throw new AppError_1.default("Você ja tem um estabelecimento com esse nome");
            }
            const establishmentData = Object.assign(Object.assign({}, establishment), { id: (0, uuid_1.v4)() });
            const newEstablishment = yield this.establishmentRepository.create(establishmentData);
            yield this.machineFeesRepository.create({
                establishment_Id: newEstablishment.id,
            });
            return newEstablishment;
        });
    }
};
CreateEstablishmentService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("EstablishmentRepository")),
    __param(1, (0, tsyringe_1.inject)("MachineFeesRepository")),
    __metadata("design:paramtypes", [Object, Object])
], CreateEstablishmentService);
exports.default = CreateEstablishmentService;
