import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import Carrinho from "./Carrinho"

@Entity()
export default class Produto {

    @PrimaryGeneratedColumn()
    idproduto: number

    @Column()
    descricao: string

    @Column()
    preco: string
    
    @Column()
    estoque: string
}