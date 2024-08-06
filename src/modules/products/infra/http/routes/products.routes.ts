import { celebrate, Joi, Segments } from "celebrate";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get(
  "/unique",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishmentId: Joi.string().required(),
    },
  }),
  productsController.readUnique
);

productRouter.get(
  "/all",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishmentId: Joi.string().required(),
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
      wholesaleMinimalQuantity: Joi.number(),
      wholesaleUnityPrice: Joi.number(),
      validationDate: Joi.date(),
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
      wholesaleMinimalQuantity: Joi.number(),
      wholesaleUnityPrice: Joi.number(),
      validationDate: Joi.date(),
      category: Joi.string(),
    },
  }),
  productsController.update
);

productRouter.delete(
  "/delete",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  productsController.delete
);

export default productRouter;
