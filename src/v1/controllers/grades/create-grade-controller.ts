import { Request, Response } from "express";
import { CreateGradeService } from "../../services/grades/create-grade-service";

export class CreateGradeController {

    async handle(request: Request, response: Response) {
        const { studentId, classId, subject, grade } = request.body

        try {
            const createGradeService = new CreateGradeService()
            const gradeCreated = await createGradeService.execute({ studentId, classId, subject, grade })

            response.status(201).json(gradeCreated)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });

        }
    }
}