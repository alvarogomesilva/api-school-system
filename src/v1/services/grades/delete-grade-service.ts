import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class DeleteGradeService {

    async execute({id}: { id: string }) {
        
        if (!id) {
            throw new HttpException('grade inválid', 400)
        }

        const grade = await prismaClient.grade.delete({
            where: { id },
            select: {
                id: true,
                subject: true,
                studentId: true
            }
        })

        if (!grade) {
            throw new HttpException('grade not found', 404)
        }

        return grade;
    }
}