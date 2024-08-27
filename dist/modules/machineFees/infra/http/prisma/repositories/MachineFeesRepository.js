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
const database_1 = require("database");
const uuid_1 = require("uuid");
class MachineFeesRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const machineFees = yield database_1.prisma.machineFees.findFirst({
                where: { id },
            });
            return machineFees;
        });
    }
    findByEstablishmentId(establishment_Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const machineFees = yield database_1.prisma.machineFees.findFirst({
                where: { establishment_Id: establishment_Id },
            });
            return machineFees;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMachineFees = yield database_1.prisma.machineFees.create({
                data: Object.assign(Object.assign({}, data), { id: (0, uuid_1.v4)() }),
            });
            return newMachineFees;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateMachineFees = yield database_1.prisma.machineFees.update({
                where: {
                    id: data.id,
                },
                data: Object.assign({}, data),
            });
            return updateMachineFees;
        });
    }
    delete(establishmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.machineFees.delete({
                where: {
                    establishment_Id: establishmentId,
                },
            });
        });
    }
}
exports.default = MachineFeesRepository;
