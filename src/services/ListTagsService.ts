import { getCustomRepository } from 'typeorm';
import { TagRepository } from '../repositories/TagRepository';
import { classToPlain } from 'class-transformer';

class ListTagsService {

    async execute() {
        const tagRepository = getCustomRepository(TagRepository);

        const tags = await tagRepository.find();

        return classToPlain(tags); //aqui recuperamos as colunas encontradas, além da informação adicional ("name_custom") criada na entity de Tag
    }
}   

export { ListTagsService }