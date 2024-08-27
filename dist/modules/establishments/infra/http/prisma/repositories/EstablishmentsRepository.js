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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../../../../../database");
class EstablishmentsRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishment = yield database_1.prisma.establishment.findUnique({
                where: { id },
                include: {
                    machineFees: true,
                },
            });
            return establishment;
        });
    }
    findByMatrixId(matrixId) {
        return __awaiter(this, void 0, void 0, function* () {
            const establishment = yield database_1.prisma.establishment.findMany({
                where: { matrix_Id: matrixId },
                include: {
                    machineFees: true,
                    products: true,
                    inOuts: true,
                    sale: true,
                },
            });
            return establishment;
        });
    }
    create(establishment) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEstablishment = yield database_1.prisma.establishment.create({
                data: Object.assign({}, establishment),
            });
            return newEstablishment;
        });
    }
    update(establishment) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEstablishment = yield database_1.prisma.establishment.update({
                where: {
                    id: establishment.id,
                },
                data: Object.assign({}, establishment),
            });
            return updatedEstablishment;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.establishment.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = EstablishmentsRepository;
