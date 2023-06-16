console.log('File loaded');
//startScreen
const startScreen = document.querySelector('div.startScreen');
const startButton = document.querySelector('button.startButton');

//mainContainer
const mainContainer = document.querySelector('div.mainContainer');
//all win and lose end screens
const winnerEndScreen = document.querySelector('div.winnerEndScreen');
const losingEndScreen1 = document.querySelector('div.losingEndScreen1');
const losingEndScreen2 = document.querySelector('div.losingEndScreen2');
const losingEndScreen3 = document.querySelector('div.losingEndScreen3');
const losingEndScreen4 = document.querySelector('div.losingEndScreen4');
const losingEndScreen5 = document.querySelector('div.losingEndScreen5');
const losingEndScreen6 = document.querySelector('div.losingEndScreen6');
const losingEndScreen7 = document.querySelector('div.losingEndScreen7');
const losingEndScreen8 = document.querySelector('div.losingEndScreen8');
const losingEndScreen9 = document.querySelector('div.losingEndScreen9');

startButton.addEventListener('click', startGame);
function startGame(){
    startScreen.classList.add('hidden');
    document.body.style.backgroundColor = 'black'
    mainContainer.classList.remove('hidden');
}

//mainContainer HTML elements
const span = document.querySelector('span');
const inputColor = document.querySelector('input.inputPassword');
const button = document.querySelector('button.guessButton');
button.addEventListener('click', guessColor);
button.addEventListener('click', guessColor2);
button.addEventListener('click', guessColor3);
button.addEventListener('click', guessColor4);
button.addEventListener('click', guessColor5);
button.addEventListener('click', guessColor6);
button.addEventListener('click', guessColor7);
button.addEventListener('click', guessColor8);
button.addEventListener('click', guessColor9);
button.addEventListener('click', guessColor10);

//all the guesscolors functions for every button
function guessColor(){
    if(inputColor.value == '924E7D'){
        console.log('true');
        winnerEndScreen.classList.remove('hidden');
        mainContainer.classList.add('hidden');
}
}
function guessColor2(){
    if(inputColor.value == '2271B3'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen1.classList.remove('hidden');
    }
}
function guessColor3(){
    if(inputColor.value == '57A639'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen2.classList.remove('hidden');
    }
}
function guessColor4(){
    if(inputColor.value == 'DE4C8A'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen3.classList.remove('hidden');
    }
}
function guessColor5(){
    if(inputColor.value == 'F44611'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen4.classList.remove('hidden');
    }
}
function guessColor6(){
    if(inputColor.value == 'F80000'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen5.classList.remove('hidden');
    }
}
function guessColor7(){
    if(inputColor.value == '063971'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen6.classList.remove('hidden');
    }
}
function guessColor8(){
    if(inputColor.value == 'EC7C26'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen7.classList.remove('hidden');
    }
}
function guessColor9(){
    if(inputColor.value == 'BDECB6'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen8.classList.remove('hidden');
    }
}
function guessColor10(){
    if(inputColor.value == 'FDF4E3'){
        console.log('false');
        mainContainer.classList.add('hidden');
        losingEndScreen9.classList.remove('hidden');
    }
}

//restartButton and nextButton and homeButton for the end game
const restartButton1 = document.querySelector('button.restartButton1');
const restartButton2 = document.querySelector('button.restartButton2');
const restartButton3 = document.querySelector('button.restartButton3');
const restartButton4 = document.querySelector('button.restartButton4');
const restartButton5 = document.querySelector('button.restartButton5');
const restartButton6 = document.querySelector('button.restartButton6');
const restartButton7 = document.querySelector('button.restartButton7');
const restartButton9 = document.querySelector('button.restartButton9');
const nextButton = document.querySelector('button.nextButton');
const homeButton = document.querySelector('button.homeButton');
restartButton1.addEventListener('click', startGameOver);
restartButton2.addEventListener('click', startGameOver);
restartButton3.addEventListener('click', startGameOver);
restartButton4.addEventListener('click', startGameOver);
restartButton5.addEventListener('click', startGameOver);
restartButton6.addEventListener('click', startGameOver);
restartButton7.addEventListener('click', startGameOver);
restartButton9.addEventListener('click', startGameOver);
nextButton.addEventListener('click', nextPage);
homeButton.addEventListener('click', homePage);


function startGameOver(){
    window.location.reload();
}
function nextPage(){
    location.href = 'endScreen.html';
}
function homePage(){
    location.href = 'startPage.html';
}