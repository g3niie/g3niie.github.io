console.log('File loaded');

//alle Elementen opgenomen van HTML bestand
const lightSwitch = document.querySelector('div.light-switch');
const wrapper = document.querySelector('div.wrapper');
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const switchContainer = document.querySelector('switch-container');
const switchCaseContainer1 = document.querySelector('div.switch-case-1');
const switchCaseContainer2 = document.querySelector('div.switch-case-2');
const button1 = document.querySelector('button.switch-case-button1');
const button2 = document.querySelector('button.switch-case-button2');
const homepage = document.querySelector('button.homepage');

//alle addEventListeners
lightSwitch.addEventListener('click', mainPage);
button1.addEventListener('click', nextPage);
homepage.addEventListener('click', goHome);

//Alle Functions in deze HTML bestand
function mainPage() {
    lightSwitch.classList.toggle('margin');
    button1.classList.remove('hidden');
    wrapper.style.backgroundColor = 'white';
    lightSwitch.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'black';
    h1.style.color = 'white';
    homepage.style.backgroundColor = 'white';
    homepage.style.color = 'black';
}
function nextPage() {
    switchCaseContainer2.classList.toggle('hidden');
}
function goHome() {
    location.href = 'index.html'
}