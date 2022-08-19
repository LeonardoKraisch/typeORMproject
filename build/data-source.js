"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Cliente_1 = require("./entity/Cliente");
var Produto_1 = require("./entity/Produto");
var Venda_1 = require("./entity/Venda");
var Carrinho_1 = require("./entity/Carrinho");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "*******",
    database: "postgres",
    entities: [Cliente_1.default, Produto_1.default, Venda_1.default, Carrinho_1.default],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
