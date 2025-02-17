import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class ListGradeByIdService {

    async execute({ id }: { id: string }) {

        if (!id) {
            throw new HttpException('student invalid', 400)
        }

        const grade = await prismaClient.grade.findMany({
            where: { studentId: id }
        })

        if (!grade) {
            throw new HttpException('not found', 404)
        }

        return grade;
    }
}