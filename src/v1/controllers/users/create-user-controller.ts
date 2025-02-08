import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/create-user-service";

export class CreateUserController {

    async handle(request: Request, response: Response) {

        try {
            const createUserService = new CreateUserService()
            const userCreated = createUserService.execute()

            response.json(userCreated)
        } catch (error) {
            console.log(error)
        }
    }
}