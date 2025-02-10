import { Request, Response } from "express";
import { CreateClassService } from "../../services/classes/create-class-service";

export class CreateClassController {

    async handle(request: Request, response: Response) {
        const { name, year, teacherId, students } = request.body

        try {
            const createClassService = new CreateClassService()
            const classCreated = await createClassService.execute({ name, year, teacherId, students })

            response.status(200).json(classCreated)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}