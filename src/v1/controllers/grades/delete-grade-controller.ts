import { Request, Response } from "express";
import { DeleteGradeService } from "../../services/grades/delete-grade-service";

export class DeleteGradeController {
    async handle(request: Request, response: Response) {

        const id = request.params.id as string;

        try {
            const deleteGradeService = new DeleteGradeService()
            const deletedGrade = await deleteGradeService.execute({ id })

            response.status(200).json(deletedGrade)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}