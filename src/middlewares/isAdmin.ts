import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository } from 'typeorm';



export async function isAdmin(req: Request, res: Response, next: NextFunction) {

    const { user_id } = req; //pegamos o req.user_id enviado no middleware de autenticação

    const userRepository = getCustomRepository(UserRepository);

    const user  = await userRepository.findOne(user_id);

    if (user?.admin) {
        return next();
    }

    return res.status(401).json({
        error: "Unauthorized"
    });
}