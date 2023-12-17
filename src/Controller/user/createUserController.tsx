import { Request, Response } from "express";
import CreateUserService from "../../Service/user/createUserService";

export default class CreateUserCOntroller {
    async handle(req: Request, res: Response) {
        const service = await new CreateUserService().executeService()
        return res.send(service)
    }
}