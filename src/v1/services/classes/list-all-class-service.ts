import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class ListAllClassService {
    
    async execute() {
        
        const classes = await prismaClient.class.findMany({
            select: {
                id: true,
                name: true,
                students: true,
                teacherId: true,
                year: true
            }
        });

        if (!classes || classes.length < 1) {
            throw new HttpException('Not found classes', 404);
        }

        return classes
    }
}
