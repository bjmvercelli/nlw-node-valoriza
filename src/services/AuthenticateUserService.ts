import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({email});

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
            }, "iiBLT4gVV79iAOdSxm1D1THevo54VnZNc1UHJ0uPwgTfA78WnlBf1Gn7d6ys86xeqoOL81R/M4QglpntuLCoS1/g20a9rhfjjxYyilZcdxcksRpNOfhYijea/S3Xx54zKDlOg2Gdfmti6l1awRjEsHdKlmatI1UuZ74WiEGQxJhcS495PITNR9xeJLGnRjlIXd6sxrFdTLHHtXIqDgxGWZUyVzMSNkzvAGfHKpsLvcrY+XYKm/w+wgNj0Uu2JiOAnYFAzJfyByeX6eqRdTAg9/rwVB9O0Hl5QX1WoiAhuwHmH6iHnjI34wG7VYaYea7GZSlhbBTS5CzY5Qq08tAK+g==",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;
    }
}

export {AuthenticateUserService}