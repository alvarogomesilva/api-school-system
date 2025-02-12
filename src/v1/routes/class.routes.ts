import { Router } from "express";
import { CreateClassController } from "../controllers/classes/create-class-controller";
import { isAutenticated } from "../middlewares/isAutenticated";
import { is } from "../middlewares/permission";

const route = Router()

route.post('/v1/classes', isAutenticated, is(["DIRETOR"]), new CreateClassController().handle)

export { route as classesRoutes }