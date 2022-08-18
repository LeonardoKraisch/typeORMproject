"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Venda_1 = require("./Venda");
var Produto_1 = require("./Produto");
var Carrinho = /** @class */ (function () {
    function Carrinho() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Carrinho.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Carrinho.prototype, "quantidade", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Carrinho.prototype, "preco", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Venda_1.default; }, function (venda) { return venda.idvenda; }),
        __metadata("design:type", Venda_1.default)
    ], Carrinho.prototype, "idvenda", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Produto_1.default; }, function (produto) { return produto.idproduto; }),
        __metadata("design:type", Produto_1.default)
    ], Carrinho.prototype, "idproduto", void 0);
    Carrinho = __decorate([
        (0, typeorm_1.Entity)()
    ], Carrinho);
    return Carrinho;
}());
exports.default = Carrinho;
