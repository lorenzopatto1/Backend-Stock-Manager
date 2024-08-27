"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const FunctionariesController_1 = __importDefault(require("../controllers/FunctionariesController"));
const ensureFunctionaryAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureFunctionaryAuthenticate"));
const functionariesRouter = (0, express_1.Router)();
const functionariesController = new FunctionariesController_1.default();
functionariesRouter.get("/:id", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().required(),
    },
}), functionariesController.read);
functionariesRouter.post("/register", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        establishment_Id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string().required(),
        name: celebrate_1.Joi.string().required(),
        emailAddress: celebrate_1.Joi.string().required(),
        phoneNumber: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required(),
        gender: celebrate_1.Joi.string().required(),
        document: celebrate_1.Joi.string().required(),
    },
}), functionariesController.create);
functionariesRouter.put("/edit", ensureMatrixAuthenticate_1.default, ensureFunctionaryAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string(),
        name: celebrate_1.Joi.string(),
        emailAddress: celebrate_1.Joi.string(),
        phoneNumber: celebrate_1.Joi.string(),
        password: celebrate_1.Joi.string(),
        gender: celebrate_1.Joi.string(),
        document: celebrate_1.Joi.string(),
    },
}), functionariesController.update);
functionariesRouter.delete("/delete", ensureMatrixAuthenticate_1.default, ensureFunctionaryAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        id: celebrate_1.Joi.string().required(),
    },
}));
exports.default = functionariesRouter;
