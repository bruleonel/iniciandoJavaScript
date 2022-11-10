class Carro {
    marca;
    cor;
    gastoCombustívelPorKm;

    constructor(marca, cor, gastoCombustívelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustívelPorKm = gastoCombustívelPorKm;
    }

    calcularValorViagem(distancia, precoCombustivel) {
        let valorGasto = distancia * precoCombustivel * this.gastoCombustívelPorKm;
        return valorGasto;
    }
}

    const carro = new Carro('Ford', 'preto', 2);
    carro.calcularValorViagem(2,5);

console.log(carro.calcularValorViagem(2, 5));
