import Carro from './Carro'
import ConcessionariaInterface from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface
{

    private endereco:string = ""
    private listaDeCarros: Carro[]

    constructor(endereco:string,listaDeCarros:Carro[])
    {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string
    {
        return this.endereco
    }

    public mostrarListaDeCarros():Carro[]
    {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string
    {
        return "De Segunda a Sexta das 8h às 18h e Sabado das 8h às 14h"
    }

}

