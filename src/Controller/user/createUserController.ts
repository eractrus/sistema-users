import { Request, Response } from "express";
import CreateUserService from "../../Service/user/createUserService";
import { JsonObject } from "@prisma/client/runtime/library";

export default class CreateUserCOntroller {
    async handle(req: Request, res: Response) {

        const { apelido, email, senha } = req.body

        if (!apelido || !email || !senha) {

            return res.status(500).json({
                menasagem: 'Necessário que todos os dados sejam preenchidos'
            })
        }

        const service = await new CreateUserService().executeService(
            {
                apelido, email, senha
            }
        )

        return res.send(service)
    }
}