const entradas = [10, 19, 7, 43, 65, 2, 79]
let i = 0

function gets() {
    const entrada = entradas[i];
    i++;
    return entrada;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };