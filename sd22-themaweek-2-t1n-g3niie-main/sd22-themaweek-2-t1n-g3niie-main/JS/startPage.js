console.log('File loaded');
//All html elements
const fullNameButton = document.querySelector('button.fullName');
const nextButton = document.querySelector('button.nextButton');
const nextButton2 = document.querySelector('button.nextButton2');
const nextButton3 = document.querySelector('button.nextButton3');
const nextButton4 = document.querySelector('button.nextButton4');
const nextSentenceP1 = document.querySelector('p.text1');
const nextSentenceP2 = document.querySelector('p.text2');
const nextSentenceP3 = document.querySelector('p.text3');
const nextSentenceP4 = document.querySelector('p.text4');
const fullNameh1 = document.querySelector('h1');
const wrapper = document.querySelector('div.wrapper');
const startMenuButton = document.querySelector('button.startMenuButton');

//All addEventListeners for the startScreen
startMenuButton.addEventListener('click', enterTheGame);
fullNameButton.addEventListener('click', getFullName);
nextButton.addEventListener('click', nextSentence1);
nextButton2.addEventListener('click', nextSentence2);
nextButton3.addEventListener('click', nextSentence3);
nextButton4.addEventListener('click', nextSentence4);

//everthing that needs the classlist of hidden
nextButton.classList.add('hidden');
nextButton2.classList.add('hidden');
nextButton3.classList.add('hidden');
nextButton4.classList.add('hidden');
nextSentenceP1.classList.add('hidden');
nextSentenceP2.classList.add('hidden');
nextSentenceP3.classList.add('hidden');
nextSentenceP4.classList.add('hidden');
wrapper.classList.add('hidden');

//function to get the Full name
function getFullName(){
    let nameUser = prompt('What is your full name?');
    fullNameh1.innerHTML += `Welcome to the game ${nameUser}!`
    fullNameButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
}

//functions to make the button visible and hidden 
function nextSentence1(){
    nextSentenceP1.classList.add('visible');
    nextButton.classList.add('hidden');
    nextButton2.classList.remove('hidden');
}
function nextSentence2(){
    nextSentenceP2.classList.add('visible');
    nextButton2.classList.add('hidden');
    nextButton3.classList.remove('hidden');
}
function nextSentence3(){
    nextSentenceP3.classList.add('visible');
    nextButton3.classList.add('hidden');
    nextButton4.classList.remove('hidden');
}
function nextSentence4(){
    nextSentenceP4.classList.add('visible');
    nextButton4.classList.add('hidden');
}
function enterTheGame(){
    startMenuButton.classList.add('hidden');
    wrapper.classList.add('visible');
}
