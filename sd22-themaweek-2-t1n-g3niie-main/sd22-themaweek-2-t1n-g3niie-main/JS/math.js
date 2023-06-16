//startScreen
const startScreen = document.querySelector('div.startScreen');

//All mathContainers
const mathContainer = document.querySelector('div.mathContainer');
const math1 = document.querySelector('div.math1');
const math2 = document.querySelector('div.math2');
const math3 = document.querySelector('div.math3');
const math4 = document.querySelector('div.math4');
const math5 = document.querySelector('div.math5');  
math1.classList.add('hidden2');
//h2 enemyHP and playerHP H2
const playerHPH2 = document.querySelector('h2.playerHPH2');
const enemyHPH2 = document.querySelector('h2.enemyHPH2');
playerHPH2.classList.add('hidden2');
enemyHPH2.classList.add('hidden2');
//all enemy and player HP bars and span
const enemyHP1 = document.querySelector('div.enemyHP1');
const enemyHP2 = document.querySelector('div.enemyHP2');
const enemyHP3 = document.querySelector('div.enemyHP3');
const enemyHP4 = document.querySelector('div.enemyHP4');
const enemyHP5 = document.querySelector('div.enemyHP5');
const enemyHP3Span = document.querySelector('span.enemyHP3Span');

const playerHP1 = document.querySelector('div.playerHP1');
const playerHP2 = document.querySelector('div.playerHP2');
const playerHP3 = document.querySelector('div.playerHP3');
const playerHP4 = document.querySelector('div.playerHP4');
const playerHP5 = document.querySelector('div.playerHP5');
const playerHP3Span = document.querySelector('span.playerHP3Span');

const playerHP = document.querySelector('div.playerHP');
const enemyHP = document.querySelector('div.enemyHP');
playerHP.classList.add('hidden2');
enemyHP.classList.add('hidden2');
const enterStartScreen = document.querySelector('button.enterStartScreen');
const startButton = document.querySelector('button.startButton');
//winning and losing end screen
const winningEndScreen   = document.querySelector('div.winningEndScreen');
const losingEndScreen = document.querySelector('div.losingEndScreen');
//math1 elements
const question1Answer = document.querySelector('span.question1Span');
const question1Input = document.querySelector('input.question1Input');
const question1Button = document.querySelector('button.question1Button');

//math2 elements
const question2Answer = document.querySelector('span.question2Span');
const question2Input = document.querySelector('input.question2Input');
const question2Button = document.querySelector('button.question2Button');

//math3 elements
const question3Answer = document.querySelector('span.question3Span');
const question3Input = document.querySelector('input.question3Input');
const question3Button = document.querySelector('button.question3Button');


//math4 elements
const question4Answer = document.querySelector('span.question4Span');
const question4Input = document.querySelector('input.question4Input');
const question4Button = document.querySelector('button.question4Button');

//math5 elements
const question5Answer = document.querySelector('span.question5Span');
const question5Input = document.querySelector('input.question5Input');
const question5Button = document.querySelector('button.question5Button');


question1Button.addEventListener('click', answer1);
question2Button.addEventListener('click', answer2);
question3Button.addEventListener('click', answer3);
question4Button.addEventListener('click', answer4);
question5Button.addEventListener('click', answer5);

//function of first answer
function answer1(){
    if(question1Input.value == '2'){
        enemyHP5.classList.add('removeHealth');
        enemyHP3Span.innerHTML = '80';
        question1Input.classList.add('hidden');
        question1Answer.innerHTML = 'Well done!';
        math2.classList.remove('hidden');
    }
    if(question1Input.value != '2'){
        playerHP5.classList.add('removeHealth');
        playerHP3Span.innerHTML = '80';
        question1Input.classList.add('hidden');
        question1Answer.innerHTML = 'Wrong!';
        math2.classList.remove('hidden');

    }
}

//function of second answer
function answer2(){
    if(question2Input.value == 'a'){
        enemyHP5.classList.add('removeHealth');
        enemyHP4.classList.add('removeHealth');
        enemyHP3Span.innerHTML = '60';
        question2Input.classList.add('hidden');
        question2Answer.innerHTML = 'Well done!';
        math3.classList.remove('hidden');
    }
    if(question2Input.value != 'a'){
        playerHP5.classList.add('removeHealth');
        playerHP4.classList.add('removeHealth');
        playerHP3Span.innerHTML = '60';
        question2Input.classList.add('hidden');
        question2Answer.innerHTML = 'Wrong!';
        math3.classList.remove('hidden');

    }
}

//function of third answer
function answer3(){
    if(question3Input.value == 'd'){
        enemyHP5.classList.add('removeHealth');
        enemyHP4.classList.add('removeHealth');
        enemyHP3.classList.add('removeHealth');
        enemyHP3Span.innerHTML = '40';
        question3Input.classList.add('hidden');
        question3Answer.innerHTML = 'Well done!';
        math4.classList.remove('hidden');
    }
    if(question3Input.value != 'd'){
        playerHP5.classList.add('removeHealth');
        playerHP4.classList.add('removeHealth');
        playerHP3.classList.add('removeHealth');
        playerHP3Span.innerHTML = '40';
        question3Input.classList.add('hidden');
        question3Answer.innerHTML = 'Wrong!';
        math4.classList.remove('hidden');
    }
}

//function of fourth answer
function answer4(){
    if(question4Input.value == 'a'){
        enemyHP5.classList.add('removeHealth');
        enemyHP4.classList.add('removeHealth');
        enemyHP3.classList.add('removeHealth');
        enemyHP2.classList.add('removeHealth');
        enemyHP3Span.innerHTML = '20';
        question4Input.classList.add('hidden');
        question4Answer.innerHTML = 'Well done!';
        math5.classList.remove('hidden');
    }
    if(question4Input.value != 'a'){
        playerHP5.classList.add('removeHealth');
        playerHP4.classList.add('removeHealth');
        playerHP3.classList.add('removeHealth');
        playerHP2.classList.add('removeHealth');
        playerHP3Span.innerHTML = '20';
        question4Input.classList.add('hidden');
        question4Answer.innerHTML = 'Wrong!';
        math5.classList.remove('hidden');
    }
}

//function of fifth answer
function answer5(){
    if(question5Input.value == 50){
        enemyHP5.classList.add('removeHealth');
        enemyHP4.classList.add('removeHealth');
        enemyHP3.classList.add('removeHealth');
        enemyHP2.classList.add('removeHealth');
        enemyHP1.classList.add('removeHealth');
        enemyHP3Span.innerHTML = '0';
        question5Input.classList.add('hidden');
        question5Answer.innerHTML = 'Well done!';
        
    }
    if(question5Input.value != 50){
        playerHP5.classList.add('removeHealth');
        playerHP4.classList.add('removeHealth');
        playerHP3.classList.add('removeHealth');
        playerHP2.classList.add('removeHealth');
        playerHP1.classList.add('removeHealth');
        playerHP3Span.innerHTML = '0';
        question5Input.classList.add('hidden');
        question5Answer.innerHTML = 'Wrong!';
    }
    checkWinner()
}

//function of checking who won
function checkWinner(){
    if(enemyHP3Span.innerHTML == '0'){
        mathContainer.classList.add('hidden2');
        winningEndScreen.classList.remove('hidden2');
    }
    if(playerHP3Span.innerHTML == '0'){
        mathContainer.classList.add('hidden2');
        losingEndScreen.classList.remove('hidden2');
    }
}


enterStartScreen.addEventListener('click', enterGame);
startButton.addEventListener('click', startGame);

//function to enter the game
function enterGame(){
    enterStartScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

//function to start the main game
function startGame(){
    startScreen.classList.add('hidden');
    math1.classList.remove('hidden2');
    enemyHPH2.classList.remove('hidden2');
    enemyHP.classList.remove('hidden2');
    playerHP.classList.remove('hidden2');
    playerHPH2.classList.remove('hidden2');
}

//refresh and next Button 
const refreshButton = document.querySelector('button.refreshButton');
const nextButton = document.querySelector('button.nextButton');
refreshButton.addEventListener('click', refreshGame);
nextButton.addEventListener('click', nextGame);
function nextGame(){
    location.href = 'quiz.html';
}
function refreshGame(){
    window.location.reload();
}
