// No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.


function filtrarPares(numeros){
    return numeros.filter(numero=>numero%2==0)
}

export default filtrarPares;
