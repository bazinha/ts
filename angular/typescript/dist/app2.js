"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.modelo = "";
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.velocidadeMax = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = "";
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = "";
        this.carroPreferido = "";
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* ----- Criar carros ---- */
var carroA = new Carro("HB20", 4);
var carroB = new Carro("Veloster", 3);
var carroC = new Carro("Santa Fé", 4);
/* --- Montar a lista --- */
var listaDeCarros = [carroA, carroB, carroC];
/* --- Adicionar na Concessionaria --- */
var concessionaria1 = new Concessionaria("Av. Paulista", listaDeCarros);
console.log(concessionaria1.mostrarListaDeCarros());
/* --- Comprar Carro --- */
var cliente1 = new Pessoa("Barbara", "Santa Fé");
