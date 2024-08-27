"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ProductsRepository_1 = __importDefault(require("../infra/http/prisma/repositories/ProductsRepository"));
tsyringe_1.container.registerSingleton("ProductsRepository", ProductsRepository_1.default);
