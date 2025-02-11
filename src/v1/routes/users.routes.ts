import { Router } from "express";
import { CreateUserController } from "../controllers/users/create-user-controller";
import { UpdateUserController } from "../controllers/users/update-user-controller";
import { AuthUserController } from "../controllers/users/auth-user-controller";

const route = Router()

route.post('/v1/users', new CreateUserController().handle)
     .post('/v1/users/auth', new AuthUserController().handle)
     .patch('/v1/users/:id', new UpdateUserController().handle)


export { route as usersRoutes }