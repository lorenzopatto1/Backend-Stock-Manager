"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const MatrixRefreshTokenController_1 = __importDefault(require("../controllers/MatrixRefreshTokenController"));
const matrixesRefreshTokenRouter = (0, express_1.Router)();
const matrixRefreshTokenController = new MatrixRefreshTokenController_1.default();
matrixesRefreshTokenRouter.post("/create", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        refreshToken: celebrate_1.Joi.string().required(),
    },
}), matrixRefreshTokenController.create);
exports.default = matrixesRefreshTokenRouter;
