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
// EX 3
// const factorialFunc = n => (n > 1) ? n * factorialFunc(n - 1) : 1;
// console.log(factorialFunc(4));
// EX 4
// const array = ["surtar", "codar", "perseverar", "conseguir", "novamente"];

// function buildSkillsPhrase (paramOne) {
//     const fun1 = paramInner => (
//       `Tryber ${paramInner} aqui!

//       Tudo bem?`
//     );

//     let result = `${fun1(paramOne)}

//     Minhas cinco principais habilidades são:`;

//     array.forEach((skill, index) =>
//     result = `${result}

//     - ${skill}`);

//     result = `
// ${result}

//     #goTrybe
//     `;

//     return result;
// }

// console.log(buildSkillsPhrase("Lucas"));