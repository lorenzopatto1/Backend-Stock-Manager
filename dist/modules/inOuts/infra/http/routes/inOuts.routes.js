"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InOutsController_1 = __importDefault(require("../controllers/InOutsController"));
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const celebrate_1 = require("celebrate");
const inOutsRouter = (0, express_1.Router)();
const inOutsController = new InOutsController_1.default();
inOutsRouter.get("/unique/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), inOutsController.readUnique);
inOutsRouter.get("/all/:establishment_Id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        establishment_Id: celebrate_1.Joi.string().required(),
    },
}), inOutsController.readAll);
inOutsRouter.post("/register", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        establishment_Id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string().required(),
        value: celebrate_1.Joi.number().required(),
        date: celebrate_1.Joi.date().required(),
        description: celebrate_1.Joi.string().required(),
    },
}), inOutsController.create);
inOutsRouter.put("/update", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string(),
        value: celebrate_1.Joi.number(),
        date: celebrate_1.Joi.date(),
        description: celebrate_1.Joi.string(),
    },
}), inOutsController.update);
inOutsRouter.delete("/delete/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), inOutsController.delete);
exports.default = inOutsRouter;
