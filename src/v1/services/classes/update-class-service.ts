import { UpdateClassDTO } from "../../@types/classes/upda-class.dto";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class UpdateClassService {

    async execute(data: UpdateClassDTO) {
        const { id, name, year, teacherId, students } = data

        if (!id) {
            throw new HttpException('class not found', 404)
        }

        const classes = await prismaClient.class.update({
            data: { id, name, year, teacherId, students },
            where: { id }
        })

        return classes
    }
}