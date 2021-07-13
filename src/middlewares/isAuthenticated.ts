import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

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
        const { sub } = verify(token, "iiBLT4gVV79iAOdSxm1D1THevo54VnZNc1UHJ0uPwgTfA78WnlBf1Gn7d6ys86xeqoOL81R/M4QglpntuLCoS1/g20a9rhfjjxYyilZcdxcksRpNOfhYijea/S3Xx54zKDlOg2Gdfmti6l1awRjEsHdKlmatI1UuZ74WiEGQxJhcS495PITNR9xeJLGnRjlIXd6sxrFdTLHHtXIqDgxGWZUyVzMSNkzvAGfHKpsLvcrY+XYKm/w+wgNj0Uu2JiOAnYFAzJfyByeX6eqRdTAg9/rwVB9O0Hl5QX1WoiAhuwHmH6iHnjI34wG7VYaYea7GZSlhbBTS5CzY5Qq08tAK+g==") as IPayload;
    
        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }

}