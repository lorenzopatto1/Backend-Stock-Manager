import { celebrate, Joi, Segments } from "celebrate";
import ensureMatrixAuthenticate from "@modules/matrixes/infra/http/middlewares/ensureMatrixAuthenticate";
import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRouter = Router();

const productsController = new ProductsController();

productRouter.get(
  "/",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishmentId: Joi.string().required(),
    },
  }),
  productsController.read
);

productRouter.post(
  "/create",
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

export default productRouter;
