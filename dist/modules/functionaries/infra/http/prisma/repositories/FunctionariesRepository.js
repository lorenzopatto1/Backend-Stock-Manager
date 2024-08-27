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
class FunctionariesRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const functionary = yield database_1.prisma.functionary.findUnique({
                where: { id },
            });
            return functionary;
        });
    }
    findByEmail(emailAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const functionary = yield database_1.prisma.functionary.findUnique({
                where: { emailAddress },
            });
            return functionary;
        });
    }
    findByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const functionary = yield database_1.prisma.functionary.findUnique({
                where: { phoneNumber },
            });
            return functionary;
        });
    }
    create(functionary) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFunctionary = yield database_1.prisma.functionary.create({
                data: Object.assign({}, functionary),
            });
            return newFunctionary;
        });
    }
    update(functionary) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedMatrix = yield database_1.prisma.functionary.update({
                where: {
                    emailAddress: functionary.emailAddress,
                },
                data: Object.assign({}, functionary),
            });
            return updatedMatrix;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.prisma.functionary.delete({
                where: { id },
            });
        });
    }
}
exports.default = FunctionariesRepository;
