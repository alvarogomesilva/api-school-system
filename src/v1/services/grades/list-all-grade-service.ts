import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class ListAllGradeService {

    async execute() {

        const grades = await prismaClient.grade.findMany({
            select: {
                id: true,
                classId: true,
                grade: true,
                subject: true,
                studentId: true
            }
        })

        if (!grades) {
            throw new HttpException('not found', 404)
        }

        return grades;
    }
}