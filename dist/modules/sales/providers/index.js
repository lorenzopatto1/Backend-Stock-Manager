"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const SalesRepository_1 = __importDefault(require("../infra/http/prisma/repositories/SalesRepository"));
tsyringe_1.container.registerSingleton("SalesRepository", SalesRepository_1.default);
