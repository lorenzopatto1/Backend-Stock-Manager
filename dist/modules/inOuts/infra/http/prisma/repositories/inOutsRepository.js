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
const uuid_1 = require("uuid");
const database_1 = require("../../../../../../database");
class InOutsRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const inOut = yield database_1.prisma.inOut.findFirst({
                where: {
                    id,
                },
            });
            return inOut;
        });
    }
    findByEstablishmentId(establishmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const inOuts = yield database_1.prisma.inOut.findMany({
                where: {
                    establishment_Id: establishmentId,
                },
            });
            return inOuts;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const inOut = yield database_1.prisma.inOut.create({
                data: Object.assign(Object.assign({}, data), { id: (0, uuid_1.v4)() }),
            });
            return inOut;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedInOut = yield database_1.prisma.inOut.update({
                where: {
                    id: data.id,
                },
                data,
            });
            return updatedInOut;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.inOut.delete({
                where: {
                    id,
                },
            });
        });
    }
}
exports.default = InOutsRepository;
