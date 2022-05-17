// 4! = 4 x 3 x 2 x 1 = 24
// VETORIAL SUPER FACIL NEM DEMOREI QUASE, só 1 hr...
// let vetorial = 10;
// let resultado = vetorial;
// primeiroMultiplicador = vetorial - 1;

// for (let i = primeiroMultiplicador; i > 1; i -- ) {
//   resultado *=  i;
// }
// console.log(resultado);
// 2 =>
// let word = 'pimenta';
// let palavraContraria = '';
// for (let i = word.length - 1; i >= 0; i -= 1 ) {
//   palavraContraria += word[i] ;
// }
// console.log(palavraContraria);
// 3 =>
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorValor = array[0];
// for (let i = 0; i <= array.length - 1; i += 1) {
//   if (array[i].length > maiorValor.length) {
//     maiorValor = array[i]
//   }
// }
// console.log(maiorValor)
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorValor = array[0];
// for (let i = 0; i <= array.length - 1; i += 1) {
//   if (array[i].length < menorValor.length) {
//     menorValor = array[i]
//   }
// }
// console.log(menorValor)
// 4 =>
let numeros = 50;
let numerosPrimos = [];
for (let i = 2; i <= numeros; i += 1) {
  let isPrimo = true;
  for (let i2 = 2; i2 < i; i2 += 1) {
    if (i % i2 == 0) {
      isPrimo = false;
      break;
    }
    }
    if (isPrimo == true) {
      numerosPrimos.push(i);
    }
  }
  console.log(numerosPrimos[numerosPrimos.length - 1]);
