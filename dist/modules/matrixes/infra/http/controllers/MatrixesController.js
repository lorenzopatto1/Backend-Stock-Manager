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
const CreateMatrixService_1 = __importDefault(require("../../../services/CreateMatrixService"));
const tsyringe_1 = require("tsyringe");
const class_transformer_1 = require("class-transformer");
const GetMatrixService_1 = __importDefault(require("../../../services/GetMatrixService"));
const UpdateMatrixService_1 = __importDefault(require("../../../../matrixes/services/UpdateMatrixService"));
class MatrixesController {
    read(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.matrix;
            const getMatrix = tsyringe_1.container.resolve(GetMatrixService_1.default);
            const user = yield getMatrix.execute(id);
            return response.json((0, class_transformer_1.instanceToPlain)(user));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const createMatrix = tsyringe_1.container.resolve(CreateMatrixService_1.default);
            const user = yield createMatrix.execute(data);
            return response.json((0, class_transformer_1.instanceToPlain)(user));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const matrix = request.body;
            const { id } = request.matrix;
            const matrixData = Object.assign(Object.assign({}, matrix), { id });
            const updateMatrix = tsyringe_1.container.resolve(UpdateMatrixService_1.default);
            const updatedMatrix = yield updateMatrix.execute(matrixData);
            response.json((0, class_transformer_1.instanceToPlain)(updatedMatrix));
        });
    }
}
exports.default = MatrixesController;
