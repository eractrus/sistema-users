import { Request, Response } from "express";
import AuthUserService from "../../Service/user/authUserService";

export default class AuthUserController {
    async handle(req: Request, res: Response) {

        const { apelido, senha } = req.body

        const service = await new AuthUserService().executeService(
            { apelido, senha }
        )

        return res.send(service)
    }
}