import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/auth-user-service";

export class AuthUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        try {
            const authUserService = new AuthUserService()
            const authUser = await authUserService.execute({ email, password })

            response.status(201).json(authUser)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });

        }
    }
}