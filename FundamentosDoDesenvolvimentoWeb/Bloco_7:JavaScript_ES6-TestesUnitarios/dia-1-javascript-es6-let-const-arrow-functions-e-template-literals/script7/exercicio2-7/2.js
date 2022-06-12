// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };
// console.log(order.name)
// const customerInfo = (order) => {
//   return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº:${order.address.number}, AP: ${order.address.apartment}.`

// }

// customerInfo(order);

// const orderModifier = (order) => {
//   const newBuyer = order.name = 'Luiz Silva';
//   const pizzas = Object.keys(order.order.pizza);
//   const drinks = order.order.drinks.coke.type;
//   const newTotal = order.payment.total = '50';

//   console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);

// }

// orderModifier(order);
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// 1
// const criarTurno = (object, key, value) => {
//   object[key] = value;
// };
// criarTurno(lesson2, 'turno', 'noite');
// 2
// const listarKeys = (object) => Object.keys(object);
// console.log(listarKeys(lesson3));
// const trazerLength = (object) => Object.keys(object).length;
// console.log(trazerLength(lesson3));
// const listarValues = (object) => Object.values(object);
// console.log(listarValues(lesson2));
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// // console.log(allLessons);
// const calculStudents = (object) => {
//   let studentsTotal = 0;
//   const lessons = Object.keys(object);
//   for (i in lessons) {
//     studentsTotal += object[lessons[i]].numeroEstudantes;
//   }
//   return studentsTotal;
// }
// console.log(calculStudents(allLessons));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));