import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/update-user-service";

export class UpdateUserController {

    async handle(request: Request, response: Response) {
        const id = request.params.id as string

        const { name, role, isActive } = request.body

        try {
            const updateUserService = new UpdateUserService()
            const updateUser = await updateUserService.execute({ id, name, role, isActive })
            response.status(200).json(updateUser)
            
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}