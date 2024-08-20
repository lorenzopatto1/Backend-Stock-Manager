import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CategorysController from "../controllers/CategorysController";

const categoryRouter = Router();

const categorysController = new CategorysController();

categoryRouter.get(
  "/:establishment_Id",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.PARAMS]: {
      establishment_Id: Joi.string().required(),
    },
  }),
  categorysController.read
);

export default categoryRouter;
