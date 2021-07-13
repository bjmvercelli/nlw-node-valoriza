//Sobrescreve a tipagem, adicionando um novo atributo - PS: Devemos adicionar o path @types no array "TypeRoots" no tsconfig.json
declare namespace Express {
    export interface Request { 
        user_id: string;
    }
}