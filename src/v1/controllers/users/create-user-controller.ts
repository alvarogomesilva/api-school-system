import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/create-user-service";


export class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, password, role, isActive } = request.body

        try {
            const createUserService = new CreateUserService()
            const userCreated = await createUserService.execute({ name, email, password, role, isActive })

            response.status(201).json(userCreated)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}