import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import MachineFeesController from "../controllers/MachineFeesController";

const machineFeesRouter = Router();

const machineFeesController = new MachineFeesController();

machineFeesRouter.get(
  "/",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      establishment_Id: Joi.string().required(),
    },
  }),
  machineFeesController.read
);

machineFeesRouter.put(
  "/update",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      creditFee: Joi.number(),
      debitFee: Joi.number(),
      pixFee: Joi.number(),
    },
  }),
  machineFeesController.update
);

export default machineFeesRouter;
