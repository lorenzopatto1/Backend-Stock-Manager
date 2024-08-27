import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import SalesController from "../controllers/SalesController";
import ensureFunctionaryAuthenticate from "@shared/infra/http/middlewares/ensureFunctionaryAuthenticate";

const salesRouter = Router();

const salesController = new SalesController();

salesRouter.get(
  "/unique/:id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  salesController.readById
);

salesRouter.get(
  "/all/:establishment_Id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      establishment_Id: Joi.string().required(),
    },
  }),
  salesController.readByEstablishmentId
);

salesRouter.post(
  "/create",
  ensureMatrixAuthenticate,
  // ensureFunctionaryAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishment_Id: Joi.string().required(),
      totalSaleValue: Joi.number().required(),
      totalPurchaseValue: Joi.number().required(),
      change: Joi.number().allow(null),
      balanceToPay: Joi.number().allow(null),
      firstPayment: Joi.string().required(),
      firstAmountPaid: Joi.number().required(),
      secondPayment: Joi.string().allow(null),
      secondAmountPaid: Joi.number().allow(null),

      products: Joi.array()
        .items(
          Joi.object({
            product_Id: Joi.string().required(),
            type: Joi.string().required(),
            name: Joi.string().required(),
            category: Joi.string().required(),
            quantity: Joi.number().required(),
            purchasePrice: Joi.number().required(),
            salePrice: Joi.number().required(),
            total: Joi.number().required(),
          })
        )
        .required(),
    },
  }),
  salesController.create
);

salesRouter.delete(
  "/delete",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  salesController.delete
);

export default salesRouter;
