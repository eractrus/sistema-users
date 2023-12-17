import prismaClient from "../../Prisma"

export default class CreateUserService {
    async executeService() {
        return {
            mensagem: 'API está funcionando'
        }
    }
}