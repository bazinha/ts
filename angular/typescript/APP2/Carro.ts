import Veiculo from './Veiculo'

export default class Carro extends Veiculo 
{
    private numeroDePortas:number = 0

    constructor(modelo:string, numeroDePortas:number)
    {
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

}

export let qualquer_coisa: string = "Teste"
