import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import Cliente from "./Cliente"

@Entity()
export default class Venda {

    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    data: string

    @Column()
    status: string

    @OneToOne(() => Cliente)
    @JoinColumn({name: 'idcliente'})
    idcliente: Cliente
}