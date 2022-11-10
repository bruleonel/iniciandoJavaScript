class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    ClassificarImc() {
        const imc = this.CalcularImc();

        if (imc <= 18.5) {
            return 'Abaixo do peso';
        } else if (imc > 18.5 && imc <= 24.9) {
            return 'Normal';
        } else if (imc > 24.9 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc > 29.9) {
            return 'Obesidade';
        }
    }
}

const mulher = new Pessoa('Ana', 65, 1.63);
console.log(mulher);
console.log(mulher.CalcularImc().toFixed(2));
console.log(mulher.ClassificarImc());
