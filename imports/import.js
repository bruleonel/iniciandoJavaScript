const { gets, print } = require('./export.js');

let maiorValor = 0;

for (let i = 0; i < 7; i++) {
    const element = gets();
    if (maiorValor < element){
        maiorValor = element; 
    }
    
}

print(maiorValor);