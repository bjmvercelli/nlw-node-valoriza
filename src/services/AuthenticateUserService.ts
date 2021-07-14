import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

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
            }, secret as string,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;
    }
}

export {AuthenticateUserService}