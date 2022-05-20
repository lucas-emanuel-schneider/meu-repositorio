// 1
let novoH1 = document.createElement('h1');
novoH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(novoH1);
// 2
let novoMain = document.createElement('main');
novoMain.className = 'main-content';
document.querySelector('body').appendChild(novoMain);
// 3
let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
document.querySelector('main').appendChild(sectionCenter);
// 4
let paragraph = document.createElement('p');
paragraph.innerText = 'Texto Dentro Do Paragráfo!'
document.querySelector('.center-content').appendChild(paragraph);


