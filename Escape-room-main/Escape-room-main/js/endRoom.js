let lockButton = document.querySelector("#lockEnd");
let guessButton = document.querySelector("#finalGuess");
let backButton = document.querySelector("#finalBack");
let endGameButton = document.querySelector("#endGame");
const youWinEndScreen = document.getElementById("#youWinEndScreen");
const youWinEndStory = document.getElementById("#youWinEndStory");
let guessed = false;



function showCodeInput(){
    document.getElementById("codeInput").style.visibility = "visible";
    document.getElementById("lockEnd").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(25px)";
}

 function guess(){
    let input = document.getElementById("finalCode");
    if (input.value == 68619){
        guessed = true;
        input.style.backgroundColor = "green";
    } 
    else{
        guessed = false;
        input.style.backgroundColor = "red";
    }
 }
 function hideCodeInput(){
    console.log(guessed);
    document.getElementById("codeInput").style.visibility = "hidden";
    document.getElementById("lockEnd").style.visibility = "visible";
    document.getElementById("background").style.filter = "blur(0px)";
    if(guessed == true){
        document.getElementById("endGame").style.visibility = "visible";
        document.getElementById("lockEnd").style.visibility = "hidden";
    }
 }

 function showEndScreen(){
    document.getElementById("youWinEndStory").style.visibility = "visible";
    document.getElementById("lockEnd").style.visibility = "hidden";
    document.getElementById("endGame").style.visibility = "hidden";
 }


guessButton.addEventListener("click",guess)
lockButton.addEventListener("click", showCodeInput)
backButton.addEventListener("click",hideCodeInput)
endGameButton.addEventListener("click", showEndScreen)