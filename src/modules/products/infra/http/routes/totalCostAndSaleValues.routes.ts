import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import TotalCostAndSaleValuesController from "../controllers/TotalCostAndSaleValuesController";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";

const totalCostAndSaleValuesRouter = Router();

const totalCostAndSaleValuesController = new TotalCostAndSaleValuesController();

totalCostAndSaleValuesRouter.get(
  "/:establishment_Id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      establishment_Id: Joi.string().required(),
    },
  }),
  totalCostAndSaleValuesController.read
);

export default totalCostAndSaleValuesRouter;
