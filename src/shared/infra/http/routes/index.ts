import { Router } from "express";

import matrixesRouter from "@modules/matrixes/infra/http/routes/matrixes.routes";
import sessionsRouter from "@modules/matrixes/infra/http/routes/sessions.routes";
import refreshTokenRouter from "@modules/matrixes/infra/http/routes/refreshToken.routes";
import establishmentRouter from "@modules/establishments/infra/http/routes/establishments.routes";
import productRouter from "@modules/products/infra/http/routes/products.routes";
import inOutsRouter from "@modules/inOuts/infra/http/routes/inOuts.routes";
import machineFeesRouter from "@modules/machineFees/infra/http/routes/machineFees.routes";

const routes = Router();

routes.use("/matrixes", matrixesRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/refresh-token", refreshTokenRouter);
routes.use("/products", productRouter);
routes.use("/in-outs", inOutsRouter);
routes.use("/machine-fees", machineFeesRouter);

routes.use("/establishments", establishmentRouter);

export default routes;
