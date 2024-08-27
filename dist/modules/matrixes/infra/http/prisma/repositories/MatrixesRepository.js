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
class MatrixesRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.matrix.findUnique({
                where: { id },
                include: {
                    establishments: true,
                },
            });
            return user;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.matrix.findUnique({
                where: { name },
            });
            return user;
        });
    }
    findByEmail(emailAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.matrix.findUnique({
                where: { emailAddress },
            });
            return user;
        });
    }
    findByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.matrix.findUnique({
                where: { phoneNumber },
            });
            return user;
        });
    }
    create(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.prisma.matrix.create({
                data: Object.assign({}, matrix),
            });
            return user;
        });
    }
    update(matrix) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedMatrix = yield database_1.prisma.matrix.update({
                where: {
                    id: matrix.id,
                },
                data: Object.assign({}, matrix),
            });
            return updatedMatrix;
        });
    }
}
exports.default = MatrixesRepository;
