import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { is } from "../middlewares/permission";
import { CreateGradeController } from "../controllers/grades/create-grade-controller";
import { ListAllGradeController } from "../controllers/grades/list-all-grade-controller";


const route = Router()

route.post('/v1/grades', isAutenticated, is(["PROFESSOR"]), new CreateGradeController().handle)
     .get('/v1/grades', isAutenticated, is(["DIRETOR", "PROFESSOR"]), new ListAllGradeController().handle)
     

export { route as gradesRoutes }