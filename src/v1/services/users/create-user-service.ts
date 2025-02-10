import { hashSync } from "bcryptjs";
import { CreateUserDTO } from "../../@types/users/create-user.dto";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class CreateUserService {
    async execute(data: CreateUserDTO) {
        const { name, email, password, role, isActive } = data

        if (!name) {
            throw new HttpException('name is required', 400)
        }

        if (!email) {
            throw new HttpException('email is required', 400)
        }

        if(!password) {
            throw  new HttpException('password is required', 400)
        }

        const passwordHash = hashSync(password, 10)
        
        try {
            const user = await prismaClient.user.create({
                data: { name, email, password: passwordHash, role, isActive },
                select: { id: true }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    }
}