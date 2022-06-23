// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => (number % 3 === 0 && number % 5 === 0);

// console.log(numbers.find(findDivisibleBy3And5));
// 2 fixar
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (name) => name.length === 5;

// console.log(names.find(findNameWithFiveLetters));
// 3
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = (id) => musicas.find((musica) => musica.id === id); 


// console.log(findMusic('31031685'))
// some e every
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((names) => names === name);

// console.log(hasName(names, 'Ana'));
// 2
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

// console.log(verifyAges(people, 18));
// exercicios do dia
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Adicione o código do exercício aqui:
// const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947).author.name;
// console.log(authorBornIn1947);
// 2
// function smallerName(books) {
//   let smallName = books[0].name;
//   books.forEach(book => {
//     if (book.name.length < smallName.length) {
//       smallName = book.name;
//     }
//   });
//   return smallName;
// }
// console.log(smallerName(books));
// // 3
// const expect26Car = books.find((book) => book.name.length === 26).name;
// console.log(expect26Car);
// // 4
// const booksDrecres = books.sort((a, b) => b.releaseYear - a.releaseYear);
// console.log(booksDrecres);
// 5
// const secXX = books.every((book) => book.author.birthYear >= 2000);
// console.log(secXX);
// 6
// const releaseOn80s = books.some((book) => book.releaseYear >= 1980 || book.releaseYear < 1990);
// console.log(releaseOn80s);