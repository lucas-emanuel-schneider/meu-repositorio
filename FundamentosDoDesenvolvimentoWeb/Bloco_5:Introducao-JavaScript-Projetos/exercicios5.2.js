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
// 5
let section2 = document.createElement('section');
section2.className = 'left-content';
document.querySelector('main').appendChild(section2);
// 6
let section3 = document.createElement('section');
section3.className = 'right-content';
document.querySelector('main').appendChild(section3);
// 7
let imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(imagem);
// 8
let listaUl = document.createElement('ul');
let listaDeLis = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
section3.appendChild(listaUl);
for (let i in listaDeLis) {
  let linha = document.createElement('li');
  linha.innerHTML = listaDeLis[i];
  listaUl.appendChild(linha);
}
section3.appendChild(listaUl);

novoH1.className = 'title';
sectionCenter.className = 'description';
section2.className = 'description';
section3.className = 'description';
document.querySelector('main').removeChild(section2);
section3.style.marginRight = 'auto';
document.querySelector('main').style.backgroundColor = 'green';
let Lis = document.querySelectorAll('li');
Lis[Lis.length - 1].remove();
Lis[Lis.length - 2].remove();                                                                     