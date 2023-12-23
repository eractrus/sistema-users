import prismaClient from "../../Prisma"
import { hash } from 'bcryptjs'
import { PropsUser } from '../../types/user'

export default class CreateUserService {
    async executeService({ apelido, email, senha }: PropsUser) {

        const veryEmail = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (veryEmail) {
            return {
                Mensagem: 'E-mail ja cadastrado'
            }
        }
//#TODO: Criptografando senha do usuário antes de registrar no banco de dados
        const senhaHash = await hash(senha, 8)

        const service = await prismaClient.user.create({
            data: {
                apelido: apelido, email: email, senha: senhaHash
            },
            select: {
                apelido: true,
                email: true,
            }
        })

        return { service }
    }
}