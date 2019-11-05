"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* ----- Criar carros ---- */
var carroA = new Carro_1["default"]("HB20", 4);
var carroB = new Carro_1["default"]("Veloster", 3);
var carroC = new Carro_1["default"]("Santa Fé", 4);
/* --- Montar a lista --- */
var listaDeCarros = [carroA, carroB, carroC];
/* --- Adicionar na Concessionaria --- */
var concessionaria1 = new Concessionaria_1["default"]("Av. Paulista", listaDeCarros);
//console.log(concessionaria1.mostrarListaDeCarros())
/* --- Comprar Carro --- */
var cliente1 = new Pessoa_1.Pessoa("Barbara", "Santa Fé");
concessionaria1.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente1.dizerCarroPreferido()) {
        cliente1.comprarCarro(carro);
    }
});
console.log(cliente1.dizerCarroQueTem());
console.log(Carro_1.qualquer_coisa);
