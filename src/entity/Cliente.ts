import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Cliente {

    @PrimaryGeneratedColumn()
    idcliente: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string
}
