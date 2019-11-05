import Carro, {qualquer_coisa as x} from './Carro'
import Concessionaria from './Concessionaria'
import {Pessoa} from './Pessoa'

/* ----- Criar carros ---- */

let carroA = new Carro("HB20",4)
let carroB = new Carro("Veloster",3)
let carroC = new Carro("Santa Fé", 4)

/* --- Montar a lista --- */

let listaDeCarros:Carro[] = [carroA,carroB,carroC]

/* --- Adicionar na Concessionaria --- */

let concessionaria1 = new Concessionaria("Av. Paulista", listaDeCarros)
//console.log(concessionaria1.mostrarListaDeCarros())

/* --- Comprar Carro --- */ 

let cliente1 = new Pessoa("Barbara", "Santa Fé")

concessionaria1.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente1.dizerCarroPreferido())
    {
        cliente1.comprarCarro(carro)
    }

})

console.log(cliente1.dizerCarroQueTem())

console.log(x)





