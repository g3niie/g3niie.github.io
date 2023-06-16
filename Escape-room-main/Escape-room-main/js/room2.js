const showButton = document.querySelector("#startButtonRoom2");
const hideButton = document.querySelector("#room2Button");
const guessButton = document.querySelector("#guessButton");
let correctGuess = false;

function show(){
    document.getElementById("box").style.visibility = "visible";
    document.getElementById("startButtonRoom2").style.visibility = "hidden";
    document.getElementById("backButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "hidden";
}
function hide(){
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("startButtonRoom2").style.visibility = "visible";
    document.getElementById("backButton").style.visibility = "visible";
    if(correctGuess){
        document.getElementById("nextButton").style.visibility = "visible";
    }
}
function guess(){
    let codeMathQuestion = document.getElementById("codeMathQuestion");
    if(codeMathQuestion.value == 6){
        correctGuess = true;
        document.getElementById("codeMathQuestion").style.backgroundColor = "green";
        console.log("goed");
    }
    else{
        console.log("fout");
        correctGuess = false;
        document.getElementById("codeMathQuestion").style.backgroundColor = "#ff0000";
    }
    codeMathQuestion.value = "";
}



showButton.addEventListener('click',show);
hideButton.addEventListener("click",hide);
guessButton.addEventListener("click",guess);