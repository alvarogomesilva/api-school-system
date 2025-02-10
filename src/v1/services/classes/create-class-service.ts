import { CreateClassDTO } from "../../@types/classes/create-class.dto";
import { prismaClient } from "../../config/prisma";

export class CreateClassService {
    async execute(data: CreateClassDTO) {
        const { name, year, teacherId, students } = data;

        

        try {
            
            const classes = await prismaClient.class.create({
                data: { name, year, teacherId, students }
            })
            return classes
        } catch (error) {
            console.log(error)
        }
    }
}