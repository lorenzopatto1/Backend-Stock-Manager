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
const tsyringe_1 = require("tsyringe");
const class_transformer_1 = require("class-transformer");
const GetFunctionaryService_1 = __importDefault(require("../../../services/GetFunctionaryService"));
const CreateFunctionaryService_1 = __importDefault(require("../../../services/CreateFunctionaryService"));
const UpdateFunctionaryService_1 = __importDefault(require("../../../../functionaries/services/UpdateFunctionaryService"));
class FunctionariesController {
    read(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const getFunctionary = tsyringe_1.container.resolve(GetFunctionaryService_1.default);
            const functionary = yield getFunctionary.execute(id);
            return response.json((0, class_transformer_1.instanceToPlain)(functionary));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const createFunctionary = tsyringe_1.container.resolve(CreateFunctionaryService_1.default);
            const functionary = yield createFunctionary.execute(data);
            return response.json((0, class_transformer_1.instanceToPlain)(functionary));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const functionary = request.body;
            const updateFunctionary = tsyringe_1.container.resolve(UpdateFunctionaryService_1.default);
            const updatedFunctionary = yield updateFunctionary.execute(functionary);
            response.json((0, class_transformer_1.instanceToPlain)(updatedFunctionary));
        });
    }
}
exports.default = FunctionariesController;
