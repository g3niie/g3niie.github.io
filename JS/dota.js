console.log('file loaded');

const dota1 = document.querySelector('button.stap-1');
const firstContainer = document.querySelector('div.first-container');
const secondContainer = document.querySelector('div.second-container');
const thirdContainer = document.querySelector('div.third-container');
const fourthContainer = document.querySelector('div.fourth-container');
const fifthContainer = document.querySelector('div.fifth-container');
const sixthContainer = document.querySelector('div.sixth-container');
const seventhContainer = document.querySelector('div.seventh-container');
const eightContainer = document.querySelector('div.eight-container');
const ninthContainer = document.querySelector('div.ninth-container');

dota1.addEventListener('click', show1);

function show1(){
    firstContainer.classList.toggle('hidden');
    secondContainer.classList.toggle('hidden');
    thirdContainer.classList.toggle('hidden');
    fourthContainer.classList.toggle('hidden');
    fifthContainer.classList.toggle('hidden');
    sixthContainer.classList.toggle('hidden');
    seventhContainer.classList.toggle('hidden');
    eightContainer.classList.toggle('hidden');
    ninthContainer.classList.toggle('hidden');
}