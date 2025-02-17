import { Request, Response } from "express";
import { ListAllGradeService } from "../../services/grades/list-all-grade-service";

export class ListAllGradeController {
    async handle(request: Request, response: Response) {

        try {
            const listAllGradeService = new ListAllGradeService()
            const listGrades = await listAllGradeService.execute()

            response.status(200).json(listGrades)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });

        }
    } 
}