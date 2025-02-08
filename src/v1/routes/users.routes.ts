import { Router } from "express";
import { CreateUserController } from "../controllers/users/create-user-controller";

const route = Router()

route.post('/v1/users', new CreateUserController().handle)


export { route as usersRoutes }