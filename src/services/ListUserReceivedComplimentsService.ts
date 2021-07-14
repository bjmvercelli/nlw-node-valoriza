import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '../repositories/ComplimentRepository';


class ListUserReceivedComplimentsService {

    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentRepository);

        const compliments = await complimentRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"] //ver entity dos Compliments - nos retorna as todas as colunas correspondentes as FK's definidas na entity
        });

        return compliments;
    }
}

export { ListUserReceivedComplimentsService }