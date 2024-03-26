console.log('file loaded');

const dota1 = document.querySelector('button.stap-1');
const firstContainer = document.querySelector('div.first-container');
dota1.addEventListener('click', show1);

function show1(){
    firstContainer.classList.toggle('hidden');
}