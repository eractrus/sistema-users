import prismaClient from "../../Prisma";
import { PropsValidation } from "../../types/user";
import { hash } from 'bcryptjs';

export default class AlterUserService {

    async executeService({ email, senha }: PropsValidation) {
        try {
            const existingUser = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });

            if (!existingUser) {
              throw new Error('Usuário não encontrado')
            }

            const hashedPassword = await hash(senha, 10);

            const updatedUser = await prismaClient.user.update({
                where: {
                    id: existingUser.id
                },
                data: {
                    senha: hashedPassword
                },
                select: {
                    apelido: true
                }
            });

            return {
                mensagem: `Senha do usuário ${updatedUser.apelido} alterada com sucesso!`
            };
        } catch (error) {
            console.error('Erro ao alterar senha:', error);
            return {
                mensagem: 'Erro ao alterar senha. Por favor, tente novamente.'
            };
        }
    }
}
