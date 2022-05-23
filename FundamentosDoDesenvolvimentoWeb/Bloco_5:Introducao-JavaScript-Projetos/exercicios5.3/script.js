function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function Dezembro () {
  monthDaysList = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let liCriada = document.createElement('li');
    liCriada.innerHTML = day;
    liCriada.className = 'day';
    monthDaysList.appendChild(liCriada);
  }
}
Dezembro()
monthDaysList = monthDaysList.querySelectorAll('li');
monthDaysList[25, 26, 32].classList.add('holyday');
monthDaysList[5, 12, 19, 26].classList.add('friday');

function botton () {
  let fraseDoBotao = 'Feriados';
  let botao = document.createElement('button');
  botao.textContent = fraseDoBotao;
  botao.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(botao);
}
botton();

// 3
let botao = document.querySelector('#btn-holiday').addEventListener('click', botaoDeFeriado);

function botaoDeFeriado () {
  target = document.querySelectorAll('.holiday');
  target[0].style.backgroundColor = 'red'
}