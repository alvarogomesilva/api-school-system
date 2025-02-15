import { CreateGradeDTO } from "../../@types/grades/create-grade.dtc";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class CreateGradeService {

    async execute(data: CreateGradeDTO) {
        const { studentId, classId, subject, grade } = data

        if (!studentId) {
            throw new HttpException('student invalid', 400)
        }

        if (!classId) {
            throw new HttpException('class invalid', 400)
        }

        if (!subject) {
            throw new HttpException('subject invalid', 400)
        }

        if (!grade) {
            throw new HttpException('grade is required', 400)
        }

        const grades = await prismaClient.grade.create({
            data: { studentId, classId, subject, grade }
        })

        return grades
    }
}