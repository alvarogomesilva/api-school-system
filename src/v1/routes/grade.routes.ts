import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { is } from "../middlewares/permission";
import { CreateGradeController } from "../controllers/grades/create-grade-controller";


const route = Router()

route.post('/v1/grades', isAutenticated, is(["PROFESSOR"]), new CreateGradeController().handle)
     

export { route as gradesRoutes }