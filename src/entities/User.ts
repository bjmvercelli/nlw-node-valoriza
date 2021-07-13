import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string; //a alteração do valor não pode ser feita por outra classe

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {//verifica se o id não está preenchido (criação de novo usuario) ou se ja está (remoção ou atualização)
            this.id = uuid();
        }
    }
}

export { User };