import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro1 = new Carro("santa fe", 4)
carro1.acelerar()


let moto1 = new Moto()
moto1.acelerar()

let concessionaria = new Concessionaria('',[])
console.log(concessionaria.fornecerHorariosDeFuncionamento())

console.log(carro1)
console.log(moto1)