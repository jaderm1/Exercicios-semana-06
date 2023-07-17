// Crie uma classe chamada Veiculo com as propriedades marca (string) e ano (number).
// Crie uma classe chamada Carro que herde da classe Veiculo. Adicione à classe Carro a propriedade adicional portas (number).
// Crie um método na classe Veiculo chamado obterDetalhes, que retorna uma string com as informações do veículo (marca e ano).
// Crie um método na classe Carro chamado obterDetalhes, que sobrescreve o método na classe Veiculo e retorna uma string com as informações do carro (marca, ano e número de portas).
// Crie um objeto da classe Carro e exiba no console as informações detalhadas do carro utilizando o método obterDetalhes.


class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
        obterDetalhes(){
            return `Marca: ${this.marca}, Ano: ${this.ano}`;
        }

    }
  

    class Carro extends Veiculo { 
        constructor(marca, ano, portas) {
            super(marca, ano);
            this.portas = portas;
        }
        obterDetalhes() {
            return `Marca: ${this.marca}, Ano: ${this.ano}, Portas: ${this.portas}`;
        }
    
    }
    console.log(new Carro('Fiat', 2019, 4).obterDetalhes());
    