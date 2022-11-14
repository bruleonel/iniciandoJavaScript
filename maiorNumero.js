const numeros = [23, 75, 11, 8, 82, 7];

let maior = 0;

for (let i = 0; i < numeros.length; i++) {
    let numeroVez = numeros[i]
    if (maior < numeroVez){
        maior = numeroVez; 
    }
}
console.log(maior);
