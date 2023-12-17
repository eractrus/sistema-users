import prismaClient from "../../Prisma"
import { PropsUser } from '../../types/user'

export default class CreateUserService {
    async executeService({ apelido, email, senha }: PropsUser) {

        const service = await prismaClient.user.create({
            data: {
                apelido: apelido, email:email, senha:senha
            }
        })

        return { service }
    }
}