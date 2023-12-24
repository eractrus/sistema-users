import { Request, Response } from "express";
import AlterUserService from "../../Service/user/alterUserService";

export default class AlterUserController {
    async handle(req: Request, res: Response) {

        const { senha, email } = req.body

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: 'Preencha as credenciais corretmente'
            })
        }

        const service = await new AlterUserService().executeService({ email, senha })

        return res.send(service)
    }
}