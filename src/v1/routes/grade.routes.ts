import { Router } from "express";
import { isAutenticated } from "../middlewares/isAutenticated";
import { is } from "../middlewares/permission";
import { CreateGradeController } from "../controllers/grades/create-grade-controller";
import { ListAllGradeController } from "../controllers/grades/list-all-grade-controller";
import { ListGradeByIdController } from "../controllers/grades/list-grade-by-id-controller";
import { DeleteGradeController } from "../controllers/grades/delete-grade-controller";


const route = Router()

route.post('/v1/grades', isAutenticated, is(["PROFESSOR"]), new CreateGradeController().handle)
     .get('/v1/grades', isAutenticated, is(["DIRETOR", "PROFESSOR"]), new ListAllGradeController().handle)
     .get('/v1/grades/:id', isAutenticated, is(["DIRETOR", "PROFESSOR"]), new ListGradeByIdController().handle)
     .delete('/v1/grades/:id', isAutenticated, is(["PROFESSOR"]), new DeleteGradeController().handle)

export { route as gradesRoutes }