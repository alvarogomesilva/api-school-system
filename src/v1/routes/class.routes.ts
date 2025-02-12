import { Router } from "express";
import { CreateClassController } from "../controllers/classes/create-class-controller";
import { isAutenticated } from "../middlewares/isAutenticated";

const route = Router()

route.post('/v1/classes', isAutenticated, new CreateClassController().handle)

export { route as classesRoutes }