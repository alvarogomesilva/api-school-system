import { Router } from "express";
import { CreateClassController } from "../controllers/classes/create-class-controller";

const route = Router()

route.post('/v1/classes', new CreateClassController().handle)

export { route as classesRoutes }