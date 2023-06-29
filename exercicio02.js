// Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
// Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
// Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
// Exiba o array resultante no console, ordenado em ordem decrescente de média.



let alunos = [{
    nome: "João",
    nota1:4,
    nota2:6,
}
,{
    nome: "Maria",
    nota1:8,
    nota2:9,
}
,{
    nome:"Claudio",
    nota1:10,
    nota2:8.9,
},
{
    nome:"Jorge",
    nota1:9.8,
    nota2:4.6
}
];

let alunosMedia = alunos.map(aluno=>{
    return{
        nome:aluno.nome,
        media:(aluno.nota1+aluno.nota2)/2

    }

})
console.log(alunosMedia.sort((a,b)=>b.media-a.media))