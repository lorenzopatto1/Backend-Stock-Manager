import { celebrate, Joi, Segments } from "celebrate";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get(
  "/unique/:id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productsController.readUnique
);

productRouter.get(
  "/all/:establishment_Id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      establishment_Id: Joi.string().required(),
    },
  }),
  productsController.readAll
);

productRouter.post(
  "/register",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishment_Id: Joi.string().required(),
      type: Joi.string().required(),
      name: Joi.string().required(),
      quantity: Joi.number().required(),
      purchasePrice: Joi.number().required(),
      salePrice: Joi.number().required(),
      wholesaleMinimalQuantity: Joi.number().allow(null),
      wholesaleUnityPrice: Joi.number().allow(null),
      validationDate: Joi.date().allow(null),
      category: Joi.string().required(),
    },
  }),
  productsController.create
);

productRouter.put(
  "/update",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      type: Joi.string(),
      name: Joi.string(),
      quantity: Joi.number(),
      purchasePrice: Joi.number(),
      salePrice: Joi.number(),
      wholesaleMinimalQuantity: Joi.number().allow(null),
      wholesaleUnityPrice: Joi.number().allow(null),
      validationDate: Joi.date().allow(null),
      category: Joi.string(),
    },
  }),
  productsController.update
);

productRouter.delete(
  "/delete/:id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productsController.delete
);

export default productRouter;
