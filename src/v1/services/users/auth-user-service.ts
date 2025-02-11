import { compareSync } from "bcryptjs";
import { AuthUserDTO } from "../../@types/users/auth-user.dto";
import { prismaClient } from "../../config/prisma";
import { HttpException } from "../../helpers/HttpException";
import { sign } from "jsonwebtoken";

export class AuthUserService {
    async execute(data: AuthUserDTO) {
        const { email, password } = data;

        if (!email) {
            throw new HttpException('email is required', 400)
        }
        if (!password) {
            throw new HttpException('password id required', 400)
        }

        const userExists = await prismaClient.user.findFirst({ where: { email } })

        if (!userExists) {
            throw new HttpException('email/password incorret', 401)
        }

        const passwordMatch = compareSync(password, userExists.password)

        if (!passwordMatch) {
            throw new HttpException('email/password incorret', 401)
        }

        const token = sign({ 
            userId: userExists.id,
            email: userExists.email
         }, process.env.JWT_SECRET as string, { subject: userExists.id, expiresIn: '1d' })

        return { access_token: token };
    }
}