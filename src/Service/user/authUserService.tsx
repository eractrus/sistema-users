import prismaClient from "../../Prisma";
import { PropsAuthUser } from "../../types/user";
import { compare } from "bcryptjs";

export default class AuthUserService {
    async executeService({ apelido, senha }: PropsAuthUser) {

        const veryApelido = await prismaClient.user.findFirst({
            where: {
                apelido: apelido
            },
            select: {
                senha: true
            }
        })

        if (!veryApelido) {
            return { Mensagem: 'Credenciais incorretas' }
        }

        const verySenha = await compare(senha, veryApelido.senha)

        if (!verySenha) {
            return { Mensagem: 'Credenciais incorretas' }
        }

        const result = await prismaClient.user.findFirst({
            where: {
                apelido: apelido
            },
            select: {
                apelido: true,
                email: true,
                id: true,
            }
        })

        return { result }
    }
}