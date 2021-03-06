import { getCustomRepository } from 'typeorm';
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({name, email, admin = false, password}: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        if (!email) {
            throw new Error("Incorrect email");
        }
        
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passHash
        });

        await userRepository.save(user);

        return user;
    }
}

export {CreateUserService}