let doorCodeInput = document.getElementById("codeDoor");
let correctGuess = false;

const showButton = document.querySelector("#buttonEntrance1");
const hideButton = document.querySelector("#buttonEntrance2");
const guessButton = document.querySelector("#buttonEntrance3");
console.log(document.getElementById("background").style.filter)

function show(){
    document.getElementById("box").style.visibility = "visible";
    document.getElementById("background").style.filter = "blur(10px)";
    document.getElementById("buttonEntrance1").style.visibility = "hidden";
    document.getElementById("buttonEntrance4").style.visibility = "hidden";



}

function hide(){
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(0px)" ;
    document.getElementById("buttonEntrance1").style.visibility = "visible";
    if (correctGuess == true){
        document.getElementById("buttonEntrance4").style.visibility = "visible";

    }

}

function guess(){
    if(doorCodeInput.value == 3719){
        correctGuess = true;
        console.log("correct");
        document.getElementById("codeDoor").style.backgroundColor = "green";
    }
    else{
        correctGuess = false;
        document.getElementById("codeDoor").style.backgroundColor = "#ff0000";
    }
    doorCodeInput.value = "";

}
showButton.addEventListener('click',show);
hideButton.addEventListener("click",hide);
guessButton.addEventListener("click",guess);