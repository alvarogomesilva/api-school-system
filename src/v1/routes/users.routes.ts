import { Router } from "express";
import { CreateUserController } from "../controllers/users/create-user-controller";
import { UpdateUserController } from "../controllers/users/update-user-controller";

const route = Router()

route.post('/v1/users', new CreateUserController().handle)
route.patch('/v1/users/:id', new UpdateUserController().handle)


export { route as usersRoutes }