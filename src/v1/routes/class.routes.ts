import { Router } from "express";
import { CreateClassController } from "../controllers/classes/create-class-controller";
import { isAutenticated } from "../middlewares/isAutenticated";
import { is } from "../middlewares/permission";
import { ListAllClassController } from "../controllers/classes/list-all-class-controller";
import { UpdateClassController } from "../controllers/classes/update-class-controller";

const route = Router()

route.post('/v1/classes', isAutenticated, is(["DIRETOR"]), new CreateClassController().handle)
     .get('/v1/classes', isAutenticated, is(["DIRETOR"]), new ListAllClassController().handle)
     .patch('/v1/classes/:id', isAutenticated, is(["DIRETOR"]), new UpdateClassController().handle)

export { route as classesRoutes }