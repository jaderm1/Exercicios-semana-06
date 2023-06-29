// Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number

// Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.

// Crie três objetos da classe Livro, cada um representando um livro diferente.

// Exiba no console as informações de cada livro, utilizando o método obterInformacoes

class Livro{
    constructor(titulo,autor,anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    
    }
    obterInformacoes(){
        return `O livro ${this.titulo} foi escrito por ${this.autor} e publicado em ${this.anoPublicacao}`;
        
    }

}

let livro1 = new Livro("O Pequeno Principe","Antoine de Saint-Exupéry",1943);


console.log(livro1.obterInformacoes());