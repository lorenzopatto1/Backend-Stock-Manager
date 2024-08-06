import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import EstablishmentController from "../controllers/EstablishmentController";
import ensureMatrixAuthenticate from "@shared/infra/http/middlewares/ensureMatrixAuthenticate";

const establishmentRouter = Router();

const establishmentController = new EstablishmentController();

establishmentRouter.get(
  "/",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      matrixId: Joi.string().required(),
    },
  }),
  establishmentController.read
);

establishmentRouter.post(
  "/create",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      matrix_Id: Joi.string().required(),
      name: Joi.string().required(),
      phoneNumber: Joi.string().required(),
    },
  }),
  establishmentController.create
);

establishmentRouter.put(
  "/edit",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      name: Joi.string(),
      phoneNumber: Joi.string(),
    },
  }),
  establishmentController.update
);

establishmentRouter.delete(
  "/delete",
  ensureMatrixAuthenticate,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  establishmentController.delete
);

export default establishmentRouter;
