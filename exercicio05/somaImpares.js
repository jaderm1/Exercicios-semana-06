
// No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.


function somaImpares(numeros){

    return numeros.filter(numero=>numero%2!=0).reduce((a,b)=>a+b)

}

export default somaImpares;