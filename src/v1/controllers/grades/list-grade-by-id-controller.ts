import { Request, Response } from "express";
import { ListGradeByIdService } from "../../services/grades/list-grade-by-id-service";

export class ListGradeByIdController {

    async handle(request: Request, response: Response) {
        const id = request.params.id as string

        try {
            const listGradeByIdService = new ListGradeByIdService()
            const listGrade = await listGradeByIdService.execute({ id })

            response.status(200).json(listGrade)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}