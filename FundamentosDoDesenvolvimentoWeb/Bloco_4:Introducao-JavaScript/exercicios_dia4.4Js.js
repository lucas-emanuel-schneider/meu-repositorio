// let player = {
// name: 'Marta',
// lastName: 'Silva',
// age: 34,
// bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// medals: { golden: 2, silver: 3, },
// }
// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' ' + 'tem ' + player['age'] + ' ' + 'anos de idade.');
// console.log( 'A jogadora Marta foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes.');
// console.log( 'A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata.');
// 1
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };
// for (let key in names) {
//   console.log('Olá ' + names[key] + '.');
// }
// 2
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };
// for (let key in car) {
//   console.log(key, car[key]);
// }
// functions !
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// // console.log("Bem vinda, " + info.personagem + "!");
// // nr 2
// info.recorrente = 'Sim';
// for (let key in info) {
//   console.log(key);
// }
// 3
// for (let key in info) {
// console.log(info[key])
// }
// 5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };
// for (let key in info, info2) {
//   if (info[key] === info2[key]) {
//     console.log('Ambos recorrentes');
//   } else {
//   console.log(info[key] + ' e ' + info2[key])
//   }
// // }
// // 6
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log('"O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '"')
// // 7
// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// })
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
// 1 =>
// function verifyPalindromo(palavra) {
//  let palindromo = '';
// for (i = palavra.length - 1; i >= 0; i -= 1) {
//   palindromo = palindromo + palavra[i];
// }
// if (palavra == palindromo) {
//   return true;
// } else { return  false;}

// }
// let exemplo = 'competicao';
// console.log(verifyPalindromo(exemplo));
// 5 >
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    for (let index2 in numeros) {
      if (numeros[index] === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
let test = [2, 3, 2, 5, 8, 2, 3];
console.log(maisRepetido(test));



