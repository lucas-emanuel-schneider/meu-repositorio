// // EX 1
// const testingScope = (bool) => {
//   if (bool) {
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if),";
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
// };

// testingScope(true);

// // EX 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const returnArray = (oddsAndEvens) => oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${returnArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);