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

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

// 3
function mostrarFeriados () {
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';
  let holiDays = document.querySelectorAll('.holiday');

  let botaoClick = document.querySelector('#btn-holiday').addEventListener('click', function() {
   for (let i = 0; i < holiDays.length; i += 1) {
       if (holiDays[i].style.backgroundColor === setNewColor) {
        holiDays[i].style.backgroundColor = backgroundColor;
      } else {
        holiDays[i].style.backgroundColor = setNewColor;
      }
    }
    })
};
mostrarFeriados();

// 4//
function createButton () {
  let ButtonFriday = document.createElement('button');
  ButtonFriday.id = 'btn-friday';
  ButtonFriday.innerText = 'Sextas-feiras';
  document.querySelector('.buttons-container').appendChild(ButtonFriday);
}
createButton()
// 5//
function Sextou (fridaysNoMes) {
  let Button = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday')
  let newText = 'SextouMyFriend!';
  Button.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML == fridaysNoMes[i]) {
        fridays[i].innerHTML = newText;
        fridays[i].style.backgroundColor = 'yellow';
      } else {
        fridays[i].innerHTML = fridaysNoMes[i];
        fridays[i].style.backgroundColor = 'rgb(238,238,238)'
      }
    }
  })
}
let fridaysNoMes = [4, 11, 18, 25]
Sextou (fridaysNoMes);
// 6
function zoomEmCima () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function() {
   event.target.style.fontSize = '30px';
   event.target.style.fontSize = '600';
  })
}
zoomEmCima ();

function zoomSaindo () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function() {
    event.target.style.fontSize = '300';
    event.target.style.fontSize = '20px';
})
}
zoomSaindo();
// 7
function criarSpanTarefa (tarefa) {
  let spanCriado = document.createElement('span');
  let spanContainer = document.querySelector('.my-tasks');
  spanContainer.appendChild(spanCriado);
  spanCriado.innerHTML = tarefa;
}
criarSpanTarefa('Projeto:');
// 8
function corDivTarefa (cor) {
  let divContainer = document.querySelector('.my-tasks');
  let divCriado = document.createElement('div');
  divCriado.className = 'task';
  divCriado.style.backgroundColor = cor;
  divContainer.appendChild(divCriado);
}
corDivTarefa('blue');
// 9
function addClassATarefa () {
  let tarefas = document.querySelector('.task');
  let tarefasSelecionadas = document.getElementsByClassName('task selected');
  tarefas.addEventListener('click', function(event) {
    if (tarefasSelecionadas.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task'
    }
  })
};
addClassATarefa();
// 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
// Bonus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();