import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import RefreshTokenController from "../controllers/RefreshTokenController";

const refreshTokenRouter = Router();

const refreshTokenController = new RefreshTokenController();

refreshTokenRouter.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      refreshToken: Joi.string().required(),
    },
  }),
  refreshTokenController.create
);

export default refreshTokenRouter;
