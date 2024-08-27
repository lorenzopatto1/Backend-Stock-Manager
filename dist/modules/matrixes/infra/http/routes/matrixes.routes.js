"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ensureMatrixAuthenticate_1 = __importDefault(require("@shared/infra/http/middlewares/ensureMatrixAuthenticate"));
const MatrixesController_1 = __importDefault(require("../controllers/MatrixesController"));
const matrixesRouter = (0, express_1.Router)();
const matrixesController = new MatrixesController_1.default();
matrixesRouter.get("/", ensureMatrixAuthenticate_1.default, matrixesController.read);
matrixesRouter.post("/register", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        emailAddress: celebrate_1.Joi.string().required(),
        phoneNumber: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required(),
    },
}), matrixesController.create);
matrixesRouter.put("/edit", ensureMatrixAuthenticate_1.default, (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string(),
        emailAddress: celebrate_1.Joi.string(),
        phoneNumber: celebrate_1.Joi.string(),
        password: celebrate_1.Joi.string(),
    },
}), matrixesController.update);
exports.default = matrixesRouter;
