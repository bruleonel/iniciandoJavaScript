/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
  1- Preço do combutível;
  2- Gasto médio de combustível do carro por km;
  3- Distância em km da viagem.

Imprima no cosole o valor gasto de combustível para realizar esta viagem. */

let precoCombustivelEmLitro = 5.79;
let kmPorlitros = 10;
let distancia = 100;

let litrosConsumidos = distancia / kmPorlitros;
let valorGasto = litrosConsumidos * precoCombustivelEmLitro;

console.log(valorGasto);