import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


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