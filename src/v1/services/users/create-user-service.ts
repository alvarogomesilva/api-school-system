import { CreateUserDTO } from "../../@types/users/create-user.dto";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class CreateUserService {
    async execute(data: CreateUserDTO) {
        const { name, password, role, isActive } = data

        if (!name) {
            throw new HttpException('name is required', 400)
        }

        if(!password) {
            throw  new HttpException('password is required', 400)
        }
        
        try {
            const user = await prismaClient.user.create({
                data: { name, password, role, isActive },
                select: { id: true }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    }
}