import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Venda from "./Venda"
import  Produto  from "./Produto"

@Entity()
export default class Carrinho {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: string

    @Column()
    preco: string
    
    @ManyToOne(() => Venda, (venda) => venda.idvenda)
    idvenda: Venda

    @ManyToOne(() => Produto, (produto) => produto.idproduto)
    idproduto: Produto

}

