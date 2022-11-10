// Faça uma função que retorne o nome:

function nome(nome)
{
    console.log(nome);
}
nome('Bruna');

// Faça uma função que confira maior idade:

function conferirIdade(idade)
{
    if (idade <= 0)
    {
        return 'Idade inválida';    
    } else if (idade > 0 && idade < 18) {
        return 'Menor de idade';
    } else {
        return 'Maior de idade';
    }
}

console.log(conferirIdade(3));

// Faça uma função que clacule o valor de desconto de acordo com a forma de pagamento:
// 1 = Cartão de crédito, 2 = cartão de débito, 3 = dinheiro.

function calcularFormaDePagamento(formaDePagamento, valor)
{
    let valorDesconto = 0;
    let valorAPagar = 0;

    if (formaDePagamento == 1) {
        valorDesconto = valor * 10 / 100;
        valorAPagar = valor - valorDesconto;
        return valorAPagar;

    } else if (formaDePagamento == 2) {
        valorDesconto = valor * 20 / 100;
        valorAPagar = valor - valorDesconto;
        return valorAPagar;
    } else if (formaDePagamento == 3) {
        valorDesconto = valor * 40 / 100;
        valorAPagar = valor - valorDesconto;
        return valorAPagar;
    }
}

console.log(calcularFormaDePagamento(3, 100));