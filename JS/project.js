console.log('File loaded');

const project1 = document.querySelector('button.button-selector-1');
const project1Show = document.querySelector('div.higher-lower');
const project2 = document.querySelector('button.button-selector-2');
const project2Show = document.querySelector('div.tic-tac-toe');
const project3 = document.querySelector('button.button-selector-3');
const project3Show = document.querySelector('div.dashboard');

project1.addEventListener('click', showProject1);
project2.addEventListener('click', showProject2);
project3.addEventListener('click', showProject3);

function showProject1(){
    project1Show.classList.toggle('hidden');
}
function showProject2(){
    project2Show.classList.toggle('hidden');
}
function showProject3(){
    project3Show.classList.toggle('hidden');

}