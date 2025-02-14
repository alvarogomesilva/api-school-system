import { Request, Response } from "express";
import { ListAllClassService } from "../../services/classes/list-all-class-service";

export class ListAllClassController {

    async handle(request: Request, response: Response) {

        try {
            const listAllClassService = new ListAllClassService()
            const listAllClasses = await listAllClassService.execute()

            response.status(200).json(listAllClasses)
        } catch (error: any) {
            response.status(error.status).json({ [`message-error-${error.status}`]: error.message });
        }
    }
}