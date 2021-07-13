import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";



class AuthenticateUserController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const authService = new AuthenticateUserService();

        const token = await authService.execute({
            email,
            password
        });

        return res.json(token);
    }
}

export {AuthenticateUserController}