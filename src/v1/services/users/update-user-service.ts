import { UpdateUserDTO } from "../../@types/users/update-user.dto";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";

export class UpdateUserService {

    async execute(data: UpdateUserDTO) {
        const { id, name, email, role, isActive } = data;

        if (!id) {
            throw new HttpException('user is required', 400)
        }

        try {
            const user = await prismaClient.user.update({
                data: { name, email, role, isActive },
                where: { id },
                select: { 
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    isActive: true,
                    createdAt: true,
                    updatedAt: true
                 }
            })

            return user
        } catch (error) {
            console.log(error)
        }
    }
}