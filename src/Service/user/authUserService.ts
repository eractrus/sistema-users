import prismaClient from "../../Prisma";
import { PropsAuthUser } from "../../types/user";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default class AuthUserService {
    async executeService({ apelido, senha }: PropsAuthUser) {

        const veryApelido = await prismaClient.user.findFirst({
            where: {
                apelido: apelido
            }
        })

        if (!veryApelido) {
            throw new Error('Apelido incorreto')
        }

        const verySenha = await compare(senha, veryApelido.senha)


        if (!verySenha) {
            throw new Error('Senha incorreto')
        }

       //#TODO: Gerando um token para autenticação de usuário
        const token = sign(
            {
                apelido: veryApelido.apelido,
                email: veryApelido.email
            },
            process.env.KEY_SECRET,
            {
                subject: veryApelido.id,
                expiresIn: "30d"
            }
        )

        return {
            user: {
                apelido: veryApelido.apelido,
                email: veryApelido.email,
                id: veryApelido.id
            },
            token
        }
    }
}