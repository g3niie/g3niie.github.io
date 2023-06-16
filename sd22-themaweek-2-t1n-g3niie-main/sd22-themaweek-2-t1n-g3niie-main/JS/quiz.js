console.log('File loaded');
//mainContainer element
const mainContainer = document.querySelector('div.mainContainer');
//startScreen elements 
const startScreen = document.querySelector('div.startScreen');
const startGame = document.querySelector('button.startGame');

startGame.addEventListener('click', enterGame);

//function the enter the main game
function enterGame(){
    startScreen.classList.add('hidden');
    mainContainer.classList.remove('hidden');
}
//enemy HP
const enemyHP = document.querySelector('div.enemyHP')
const enemyHP1 = document.querySelector('div.enemyHP1');
const enemyHP2 = document.querySelector('div.enemyHP2');
const enemyHP3 = document.querySelector('div.enemyHP3');
const enemyHP4 = document.querySelector('div.enemyHP4');
const enemyHP5 = document.querySelector('div.enemyHP5');
const enemyHP6 = document.querySelector('div.enemyHP6');
const enemyHP7 = document.querySelector('div.enemyHP7');
const enemyHP8 = document.querySelector('div.enemyHP8');
const enemyHP9 = document.querySelector('div.enemyHP9');
const enemyHP10 = document.querySelector('div.enemyHP10');
const enemyHP11 = document.querySelector('div.enemyHP11');
const enemyHP6Span = document.querySelector('span.enemyHP6Span');
//player HP
const playerHP = document.querySelector('div.playerHP');
const playerHP1 = document.querySelector('div.playerHP1');
const playerHP2 = document.querySelector('div.playerHP2');
const playerHP3 = document.querySelector('div.playerHP3');
const playerHP4 = document.querySelector('div.playerHP4');
const playerHP5 = document.querySelector('div.playerHP5');
const playerHP6 = document.querySelector('div.playerHP6');
const playerHP7 = document.querySelector('div.playerHP7');
const playerHP8 = document.querySelector('div.playerHP8');
const playerHP9 = document.querySelector('div.playerHP9');
const playerHP10 = document.querySelector('div.playerHP10');
const playerHP11 = document.querySelector('div.playerHP11');
const playerHP6Span = document.querySelector('span.playerHP6Span');

//quiz1
const quiz1 = document.querySelector('div.quiz1');
const quiz1Button1 = document.querySelector('button.quiz1Button1');
const quiz1Button2 = document.querySelector('button.quiz1Button2');
const quiz1Button3 = document.querySelector('button.quiz1Button3');
const quiz1Button4 = document.querySelector('button.quiz1Button4');
const quiz1Span = document.querySelector('span.quiz1Span');
quiz1Button1.addEventListener('click', wrongAnswer1);
quiz1Button2.addEventListener('click', wrongAnswer1);
quiz1Button3.addEventListener('click', wrongAnswer1);
quiz1Button4.addEventListener('click', correctAnswer1);
function correctAnswer1(){
    console.log('True');
    quiz1Span.innerHTML = 'Correct!'
    enemyHP11.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '100';
    quiz2.classList.remove('hidden');
    quiz1Button1.classList.add('hidden');
    quiz1Button2.classList.add('hidden');
    quiz1Button3.classList.add('hidden');
    quiz1Button4.classList.add('hidden');
}
function wrongAnswer1(){
    console.log('False');
    quiz1Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP6Span.innerHTML = '100';
    quiz2.classList.remove('hidden');
    quiz1Button1.classList.add('hidden');
    quiz1Button2.classList.add('hidden');
    quiz1Button3.classList.add('hidden');
    quiz1Button4.classList.add('hidden');
}

//quiz2
const quiz2 = document.querySelector('div.quiz2');
const quiz2Button1 = document.querySelector('button.quiz2Button1');
const quiz2Button2 = document.querySelector('button.quiz2Button2');
const quiz2Button3 = document.querySelector('button.quiz2Button3');
const quiz2Button4 = document.querySelector('button.quiz2Button4');
const quiz2Span = document.querySelector('span.quiz2Span');

quiz2Button1.addEventListener('click', wrongAnswer2 );
quiz2Button2.addEventListener('click', wrongAnswer2 );
quiz2Button3.addEventListener('click', correctAnswer2 );
quiz2Button4.addEventListener('click', wrongAnswer2 );

function correctAnswer2(){
    console.log('True');
    quiz2Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '90';
    quiz3.classList.remove('hidden');
    quiz2Button1.classList.add('hidden');
    quiz2Button2.classList.add('hidden');
    quiz2Button3.classList.add('hidden');
    quiz2Button4.classList.add('hidden');
}
function wrongAnswer2(){
    console.log('False');
    quiz2Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP6Span.innerHTML = '90';
    quiz3.classList.remove('hidden');
    quiz2Button1.classList.add('hidden');
    quiz2Button2.classList.add('hidden');
    quiz2Button3.classList.add('hidden');
    quiz2Button4.classList.add('hidden');

}

//quiz3
const quiz3 = document.querySelector('div.quiz3');
const quiz3Button1 = document.querySelector('button.quiz3Button1');
const quiz3Button2 = document.querySelector('button.quiz3Button2');
const quiz3Button3 = document.querySelector('button.quiz3Button3');
const quiz3Button4 = document.querySelector('button.quiz3Button4');
const quiz3Span = document.querySelector('span.quiz3Span');

quiz3Button1.addEventListener('click', wrongAnswer3);
quiz3Button2.addEventListener('click', correctAnswer3);
quiz3Button3.addEventListener('click', wrongAnswer3);
quiz3Button4.addEventListener('click', wrongAnswer3);

function correctAnswer3(){
    console.log('True');
    quiz3Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '80';
    quiz4.classList.remove('hidden');
    quiz3Button1.classList.add('hidden');
    quiz3Button2.classList.add('hidden');
    quiz3Button3.classList.add('hidden');
    quiz3Button4.classList.add('hidden');
}
function wrongAnswer3(){
    console.log('False');
    quiz3Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP6Span.innerHTML = '80';
    quiz4.classList.remove('hidden');
    quiz3Button1.classList.add('hidden');
    quiz3Button2.classList.add('hidden');
    quiz3Button3.classList.add('hidden');
    quiz3Button4.classList.add('hidden');
}

//quiz4
const quiz4 = document.querySelector('div.quiz4');
const quiz4Button1 = document.querySelector('button.quiz4Button1');
const quiz4Button2 = document.querySelector('button.quiz4Button2');
const quiz4Button3 = document.querySelector('button.quiz4Button3');
const quiz4Button4 = document.querySelector('button.quiz4Button4');
const quiz4Span = document.querySelector('span.quiz4Span');

quiz4Button1.addEventListener('click', wrongAnswer4);
quiz4Button2.addEventListener('click', wrongAnswer4);
quiz4Button3.addEventListener('click', correctAnswer4);
quiz4Button4.addEventListener('click', wrongAnswer4);

function correctAnswer4(){
    console.log('True');
    quiz4Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '70';
    quiz5.classList.remove('hidden');
    quiz4Button1.classList.add('hidden');
    quiz4Button2.classList.add('hidden');
    quiz4Button3.classList.add('hidden');
    quiz4Button4.classList.add('hidden');
}
function wrongAnswer4(){
    console.log('False');
    quiz4Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP6Span.innerHTML = '70';
    quiz5.classList.remove('hidden');
    quiz4Button1.classList.add('hidden');
    quiz4Button2.classList.add('hidden');
    quiz4Button3.classList.add('hidden');
    quiz4Button4.classList.add('hidden');
}
//quiz5
const quiz5 = document.querySelector('div.quiz5');
const quiz5Button1 = document.querySelector('button.quiz5Button1');
const quiz5Button2 = document.querySelector('button.quiz5Button2');
const quiz5Button3 = document.querySelector('button.quiz5Button3');
const quiz5Button4 = document.querySelector('button.quiz5Button4');
const quiz5Span = document.querySelector('span.quiz5Span');

quiz5Button1.addEventListener('click', wrongAnswer5);
quiz5Button2.addEventListener('click', correctAnswer5);
quiz5Button3.addEventListener('click', wrongAnswer5);
quiz5Button4.addEventListener('click', wrongAnswer5);

function correctAnswer5(){
    console.log('True');
    quiz5Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '60';
    quiz6.classList.remove('hidden');
    quiz5Button1.classList.add('hidden');
    quiz5Button2.classList.add('hidden');
    quiz5Button3.classList.add('hidden');
    quiz5Button4.classList.add('hidden');
}
function wrongAnswer5(){
    console.log('False');
    quiz5Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6Span.innerHTML = '60';
    quiz6.classList.remove('hidden');
    quiz5Button1.classList.add('hidden');
    quiz5Button2.classList.add('hidden');
    quiz5Button3.classList.add('hidden');
    quiz5Button4.classList.add('hidden');
}
//quiz6
const quiz6 = document.querySelector('div.quiz6');
const quiz6Button1 = document.querySelector('button.quiz6Button1');
const quiz6Button2 = document.querySelector('button.quiz6Button2');
const quiz6Button3 = document.querySelector('button.quiz6Button3');
const quiz6Button4 = document.querySelector('button.quiz6Button4');
const quiz6Span = document.querySelector('span.quiz6Span');

quiz6Button1.addEventListener('click', wrongAnswer6);
quiz6Button2.addEventListener('click', wrongAnswer6);
quiz6Button3.addEventListener('click', correctAnswer6);
quiz6Button4.addEventListener('click', wrongAnswer6);

function correctAnswer6(){
    console.log('True');
    quiz6Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '50';
    quiz7.classList.remove('hidden');
    quiz6Button1.classList.add('hidden');
    quiz6Button2.classList.add('hidden');
    quiz6Button3.classList.add('hidden');
    quiz6Button4.classList.add('hidden');
}
function wrongAnswer6(){
    console.log('False');
    quiz6Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP6Span.innerHTML = '50';
    quiz7.classList.remove('hidden');
    quiz6Button1.classList.add('hidden');
    quiz6Button2.classList.add('hidden');
    quiz6Button3.classList.add('hidden');
    quiz6Button4.classList.add('hidden');
}
//quiz7
const quiz7 = document.querySelector('div.quiz7');
const quiz7Button1 = document.querySelector('button.quiz7Button1');
const quiz7Button2 = document.querySelector('button.quiz7Button2');
const quiz7Button3 = document.querySelector('button.quiz7Button3');
const quiz7Button4 = document.querySelector('button.quiz7Button4');
const quiz7Span = document.querySelector('span.quiz7Span');
const quiz7I = document.querySelector('i.quiz7I')
quiz7I.addEventListener('click', correctAnswer7);
quiz7Button1.addEventListener('click', wrongAnswer7);
quiz7Button2.addEventListener('click', wrongAnswer7);
quiz7Button3.addEventListener('click', wrongAnswer7);
quiz7Button4.addEventListener('click', wrongAnswer7);

function correctAnswer7(){
    console.log('True');
    quiz7Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP5.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '40';
    quiz8.classList.remove('hidden');
    quiz7Button1.classList.add('hidden');
    quiz7Button2.classList.add('hidden');
    quiz7Button3.classList.add('hidden');
    quiz7Button4.classList.add('hidden');
}
function wrongAnswer7(){
    console.log('False');
    quiz7Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP5.classList.add('removeHealth');
    playerHP6Span.innerHTML = '40';
    quiz8.classList.remove('hidden');
    quiz7Button1.classList.add('hidden');
    quiz7Button2.classList.add('hidden');
    quiz7Button3.classList.add('hidden');
    quiz7Button4.classList.add('hidden');
}
//quiz8
const quiz8 = document.querySelector('div.quiz8');
const quiz8Button1 = document.querySelector('button.quiz8Button1');
const quiz8Button2 = document.querySelector('button.quiz8Button2');
const quiz8Button3 = document.querySelector('button.quiz8Button3');
const quiz8Button4 = document.querySelector('button.quiz8Button4');
const quiz8Span = document.querySelector('span.quiz8Span');

quiz8Button1.addEventListener('click', wrongAnswer8);
quiz8Button2.addEventListener('click', wrongAnswer8);
quiz8Button3.addEventListener('click', correctAnswer8);
quiz8Button4.addEventListener('click', wrongAnswer8);

function correctAnswer8(){
    console.log('True');
    quiz8Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP5.classList.add('removeHealth');
    enemyHP4.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '30';
    quiz9.classList.remove('hidden');
    quiz8Button1.classList.add('hidden');
    quiz8Button2.classList.add('hidden');
    quiz8Button3.classList.add('hidden');
    quiz8Button4.classList.add('hidden');
}
function wrongAnswer8(){
    console.log('False');
    quiz8Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP5.classList.add('removeHealth');
    playerHP4.classList.add('removeHealth');
    playerHP6Span.innerHTML = '30';
    quiz9.classList.remove('hidden');
    quiz8Button1.classList.add('hidden');
    quiz8Button2.classList.add('hidden');
    quiz8Button3.classList.add('hidden');
    quiz8Button4.classList.add('hidden');
}
//quiz9
const quiz9 = document.querySelector('div.quiz9');
const quiz9Button1 = document.querySelector('button.quiz9Button1');
const quiz9Button2 = document.querySelector('button.quiz9Button2');
const quiz9Button3 = document.querySelector('button.quiz9Button3');
const quiz9Button4 = document.querySelector('button.quiz9Button4');
const quiz9Span = document.querySelector('span.quiz9Span');

quiz9Button1.addEventListener('click', wrongAnswer9);
quiz9Button2.addEventListener('click', wrongAnswer9);
quiz9Button3.addEventListener('click', wrongAnswer9);
quiz9Button4.addEventListener('click', correctAnswer9);

function correctAnswer9(){
    console.log('True');
    quiz9Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP5.classList.add('removeHealth');
    enemyHP4.classList.add('removeHealth');
    enemyHP3.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '20';
    quiz10.classList.remove('hidden');
    quiz9Button1.classList.add('hidden');
    quiz9Button2.classList.add('hidden');
    quiz9Button3.classList.add('hidden');
    quiz9Button4.classList.add('hidden');
}
function wrongAnswer9(){
    console.log('False');
    quiz9Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP5.classList.add('removeHealth');
    playerHP4.classList.add('removeHealth');
    playerHP3.classList.add('removeHealth');
    playerHP6Span.innerHTML = '20';
    quiz10.classList.remove('hidden');
    quiz9Button1.classList.add('hidden');
    quiz9Button2.classList.add('hidden');
    quiz9Button3.classList.add('hidden');
    quiz9Button4.classList.add('hidden');
}
//quiz10
const quiz10 = document.querySelector('div.quiz10');
const quiz10Button1 = document.querySelector('button.quiz10Button1');
const quiz10Button2 = document.querySelector('button.quiz10Button2');
const quiz10Button3 = document.querySelector('button.quiz10Button3');
const quiz10Button4 = document.querySelector('button.quiz10Button4');
const quiz10Span = document.querySelector('span.quiz10Span');

quiz10Button1.addEventListener('click', correctAnswer10);
quiz10Button2.addEventListener('click', wrongAnswer10);
quiz10Button3.addEventListener('click', wrongAnswer10);
quiz10Button4.addEventListener('click', wrongAnswer10);

function correctAnswer10(){
    console.log('True');
    quiz10Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP5.classList.add('removeHealth');
    enemyHP4.classList.add('removeHealth');
    enemyHP3.classList.add('removeHealth');
    enemyHP2.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '10';
    quiz11.classList.remove('hidden');
    quiz10Button1.classList.add('hidden');
    quiz10Button2.classList.add('hidden');
    quiz10Button3.classList.add('hidden');
    quiz10Button4.classList.add('hidden');
}
function wrongAnswer10(){
    console.log('False');
    quiz10Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP5.classList.add('removeHealth');
    playerHP4.classList.add('removeHealth');
    playerHP3.classList.add('removeHealth');
    playerHP2.classList.add('removeHealth');
    playerHP6Span.innerHTML = '10';
    quiz11.classList.remove('hidden');
    quiz10Button1.classList.add('hidden');
    quiz10Button2.classList.add('hidden');
    quiz10Button3.classList.add('hidden');
    quiz10Button4.classList.add('hidden');
}
//quiz11
const quiz11 = document.querySelector('div.quiz11');
const quiz11Button1 = document.querySelector('button.quiz11Button1');
const quiz11Button2 = document.querySelector('button.quiz11Button2');
const quiz11Button3 = document.querySelector('button.quiz11Button3');
const quiz11Button4 = document.querySelector('button.quiz11Button4');
const quiz11Span = document.querySelector('span.quiz11Span');

quiz11Button1.addEventListener('click', correctAnswer11);
quiz11Button2.addEventListener('click', wrongAnswer11);
quiz11Button3.addEventListener('click', wrongAnswer11);
quiz11Button4.addEventListener('click', wrongAnswer11);

function correctAnswer11(){
    console.log('True');
    quiz11Span.innerHTML = 'Correct!';
    enemyHP11.classList.add('removeHealth');
    enemyHP10.classList.add('removeHealth');
    enemyHP9.classList.add('removeHealth');
    enemyHP8.classList.add('removeHealth');
    enemyHP7.classList.add('removeHealth');
    enemyHP6.classList.add('removeHealth');
    enemyHP5.classList.add('removeHealth');
    enemyHP4.classList.add('removeHealth');
    enemyHP3.classList.add('removeHealth');
    enemyHP2.classList.add('removeHealth');
    enemyHP1.classList.add('removeHealth');
    enemyHP6Span.innerHTML = '0';
    quiz11Button1.classList.add('hidden');
    quiz11Button2.classList.add('hidden');
    quiz11Button3.classList.add('hidden');
    quiz11Button4.classList.add('hidden');
    checkWinner();
}
function wrongAnswer11(){
    console.log('False');
    quiz11Span.innerHTML = 'False!';
    playerHP11.classList.add('removeHealth');
    playerHP10.classList.add('removeHealth');
    playerHP9.classList.add('removeHealth');
    playerHP8.classList.add('removeHealth');
    playerHP7.classList.add('removeHealth');
    playerHP6.classList.add('removeHealth');
    playerHP5.classList.add('removeHealth');
    playerHP4.classList.add('removeHealth');
    playerHP3.classList.add('removeHealth');
    playerHP2.classList.add('removeHealth');
    playerHP1.classList.add('removeHealth');
    playerHP6Span.innerHTML = '0';
    quiz11Button1.classList.add('hidden');
    quiz11Button2.classList.add('hidden');
    quiz11Button3.classList.add('hidden');
    quiz11Button4.classList.add('hidden');
    checkWinner();
}
//all quizes hidden
quiz2.classList.add('hidden');
quiz3.classList.add('hidden');
quiz4.classList.add('hidden');
quiz5.classList.add('hidden');
quiz6.classList.add('hidden');
quiz7.classList.add('hidden');
quiz8.classList.add('hidden');
quiz9.classList.add('hidden');
quiz10.classList.add('hidden');
quiz11.classList.add('hidden');
//nextGame and restart Button elements
const nextGame = document.querySelector('button.nextGame');
const restart = document.querySelector('button.restart');

//next game and restart function for the winning and losing end screen
nextGame.addEventListener('click', enterNextGame);
restart.addEventListener('click', startOver);

function enterNextGame(){
    location.href = '/HTML/FTC.html'
}
function startOver(){
    window.location.reload();
}
//winner and loser end Screen elements
const winnerEndScreen = document.querySelector('div.winningEndScreen');
const losingEndScreen = document.querySelector('div.losingEndScreen');

//checkWinner function for the end
function checkWinner(){
    if(playerHP6Span.innerHTML == '0'){
        console.log('Loser');
        losingEndScreen.classList.remove('hidden');
        mainContainer.classList.add('hidden');
    }
    if(enemyHP6Span.innerHTML == '0'){
        console.log('Winner');
        winnerEndScreen.classList.remove('hidden');
        mainContainer.classList.add('hidden');
    }
}