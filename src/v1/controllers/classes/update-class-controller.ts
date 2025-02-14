import { Request, Response } from "express";
import { UpdateClassService } from "../../services/classes/update-class-service";

export class UpdateClassController {

    async handle(request: Request, response: Response) {
        const id = request.params.id as string

        const { name, year, teacherId, students } = request.body

        try {
            const updateClassService = new UpdateClassService()
            const updateClass = await updateClassService.execute({ id, name, year, teacherId, students })
            response.status(200).json(updateClass)

        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });

        }
    }
}