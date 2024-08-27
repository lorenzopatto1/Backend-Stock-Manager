"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const MachineFeesController_1 = __importDefault(require("../controllers/MachineFeesController"));
const machineFeesRouter = (0, express_1.Router)();
const machineFeesController = new MachineFeesController_1.default();
machineFeesRouter.get("/:establishment_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        establishment_Id: celebrate_1.Joi.string().required(),
    },
}), machineFeesController.read);
machineFeesRouter.put("/update", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
        establishment_Id: celebrate_1.Joi.string().required(),
        creditFee: celebrate_1.Joi.number(),
        debitFee: celebrate_1.Joi.number(),
        pixFee: celebrate_1.Joi.number(),
    },
}), machineFeesController.update);
exports.default = machineFeesRouter;
