// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));
// 2
// const raffle = () => Math.floor(Math.random() * (6 - 1)) + 1;
// const draw = (choseNumb, callback) => {
//   const random = callback();
//   if (choseNumb === random) return 'Você Venceu! MAH OEEE';
//   if (choseNumb !== random) return 'Tente novamente YOU LOSE!'
// };

// console.log(draw(2, raffle));
// 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const checkNotes = (gab, answers) => {
  let note = 0;
  for (i in answers) {
    if (gab[i] === answers[i]) note += 1;
    else if (answers[i] === 'N.A') note += 0;
    else note -= 0.5;
  }
  return note;
}

const test = (gab, answers, callback) => {
  return callback(gab, answers)
}
console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, checkNotes));