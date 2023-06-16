console.log('File loaded');

const lightSwitch = document.querySelector('div.light-switch');
const wrapper = document.querySelector('div.wrapper');
const h1 = document.querySelector('h1');

lightSwitch.addEventListener('click', addMargin);
function addMargin(){
    lightSwitch.classList.toggle('margin');
    wrapper.style.backgroundColor = 'white';
    lightSwitch.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'black';
    h1.style.color = 'white';
}