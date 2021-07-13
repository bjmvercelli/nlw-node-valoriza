import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '../repositories/ComplimentRepository';
import { UserRepository } from '../repositories/UserRepository';

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepistory = getCustomRepository(UserRepository);

        if(user_sender === user_receiver){ //verifica se o usuario não está enviando a si mesmo
            throw new Error("Incorrect user receiver");
        }

        const userReceiverExists = await userRepistory.findOne(user_receiver); //o valor de "user_receiver" é o valor do id do usuario

        if(!userReceiverExists){
            throw new Error("User receiver does not exists");
        }

        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService }