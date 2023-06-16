console.log('File loaded');

//alle HTML elementen hier opgenomen
const button1 = document.querySelector('button.button1');
const button2 = document.querySelector('button.button2');
const button3 = document.querySelector('button.button3');
const h1 = document.querySelector('h1');
const writingCol = document.querySelector('div.writing-col');
const links = document.querySelector('div.links');

//addEventListeners gezet op alle buttons
button1.addEventListener('click', changeBg1);
button2.addEventListener('click', changeBg2);
button3.addEventListener('click', changeBg3);

//alle functions gebruikt
function changeBg1() {
    //alle backgroundColors en colors verandere
    document.body.style.backgroundColor = 'black';
    h1.style.color = 'white';
    writingCol.style.backgroundColor = 'white';
    writingCol.style.color = 'black';
    links.style.backgroundColor = 'white'
    links.style.color = 'black';
    button1.classList.add('hidden');
    button2.classList.add('hidden');
    button3.classList.add('hidden');
}

function changeBg2() {
    document.body.style.backgroundColor = 'blue';
    h1.style.color = 'white';
    button1.classList.add('hidden');
    button2.classList.add('hidden');
    button3.classList.add('hidden');
}

function changeBg3() {
    document.body.style.backgroundColor = 'red';
    h1.style.color = 'white';
    button1.classList.add('hidden');
    button2.classList.add('hidden');
    button3.classList.add('hidden');
}
