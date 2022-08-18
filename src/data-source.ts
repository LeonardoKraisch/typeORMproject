import { DataSource } from "typeorm"
import Cliente from "./entity/Cliente"
import Produto from "./entity/Produto"
import Venda from "./entity/Venda"
import Carrinho from "./entity/Carrinho"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "leoa2009",
    database: "postgres",
    entities: [Cliente, Produto, Venda, Carrinho],
    logging: false,
    synchronize: true,
})

export default dataSource
