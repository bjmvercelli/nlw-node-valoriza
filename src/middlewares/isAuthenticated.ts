import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_TOKEN;

interface IPayload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const fullToken = req.headers.authorization;

    if(!fullToken){
        return res.status(401).end();
    }

    const token = fullToken.split(" ")[1];

    try {
        const { sub } = verify(token, secret as string) as IPayload;
    
        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }

}