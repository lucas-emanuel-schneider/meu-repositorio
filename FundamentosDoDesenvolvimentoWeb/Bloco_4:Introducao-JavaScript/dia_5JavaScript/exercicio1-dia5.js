// const myName = "Lucas";
// const birthCity = "Santo Ângelo";
// let birthYear = 1994;
// console.log(myName);
// console.log(birthCity);
// birthYear = 2030;
// console.log(birthYear);

// segunda parte

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';
// console.log(typeof patientId)
// console.log(typeof patientInfo)
// console.log(typeof isEnrolled)
// console.log(typeof patientEmail)
// console.log(typeof patientAge)

// const base = 5;
// let height = 8;
// const area = (base * height)
// console.log(area)
// const perimeter = (base + height + area)
// console.log(perimeter)

// terceira parte

// const notaDoDesafio = 62;
// if (notaDoDesafio >= 80) {
//   console.log("Parabéns, você foi aprovado(a)")
// }
// else if (notaDoDesafio < 80 && notaDoDesafio >= 60) {
//   console.log("Você está na nossa lista de espera")
// }
// else {
//   console.log("Você foi reprovado(a)")
// }

// quarta parte
const correntHour = 2;
let message = "";
if (correntHour >= 22) {
  message = "Não deveriamos comer nada, é hora de dormir"
  console.log(message)
}
else if (correntHour >= 18 && correntHour < 22) {
  message = "Rango da noite, vamos jantar :D"
  console.log(message)
}
else if (correntHour >= 14 && correntHour < 18) {
  message = "Vamos fazer um bolo para o café da tarde?"
  console.log(message)
}
else if (correntHour >= 11 && correntHour < 14) {
  message = "Almoço!"
  console.log(message)
}
else if (correntHour >= 4 && correntHour < 11) {
  message = "QUERO Café!"
  console.log(message)
}
else {
  message = "Você é um morcegão"
  console.log(message)
}
