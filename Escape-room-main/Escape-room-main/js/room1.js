const showButton = document.querySelector("#codeHangman");
const hideButton = document.querySelector("#room1Button");
const startButton = document.querySelector("#startButton");
const guessButton = document.querySelector("#guessButton");
let wordArray = [];
let wordEmptyArray = [];
let word = "apocalypse";
let guesses = 5;
let win = false; 


function show(){
    document.getElementById("box").style.visibility = "visible";
    document.getElementById("background").style.filter = "blur(10px)";
    document.getElementById("codeHangman").style.visibility = "hidden";
    document.getElementById("backButton").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "hidden";
}

function hide(){
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(0px)" ;
    document.getElementById("codeHangman").style.visibility = "visible";
    document.getElementById("backButton").style.visibility = "visible";
    document.getElementById("guessButton").style.visibility = "hidden";
    if (win == true){
        document.getElementById("nextButton").style.visibility = "visible";

    }

}

function start(){
    document.getElementById("startButton").style.visibility = "hidden";
    boxContent = document.getElementById("characterBox");
    boxContent.textContent = "";
    for (x = 0; x < word.length; x++){
        wordArray.push(word[x]);
        wordEmptyArray.push("_");
        boxContent.textContent += wordEmptyArray[x] + " ";
        console.log(boxContent.textContent);
    }
    boxContent.textContent += "\r\n";
    for (x=1; x<=5;x++){
        boxContent.textContent += "x "
    }
    document.getElementById("guessButton").style.visibility = "visible";


}

function guess(){
    let include = false;
    let character = document.getElementById("characterInput");
    
    for(x=0; x < wordArray.length; x++){
        if(wordArray[x] == character.value){
            wordEmptyArray[x] = character.value;
            include = true;
        }

    }
    if (include == false){
        guesses--;
        if(guesses == 0){
            document.getElementById("guessButton").style.visibility = "hidden";
        }

    }
    boxContent.textContent = null;
    for (x=0; x < wordArray.length; x++){
        boxContent.textContent += wordEmptyArray[x] + " ";
    }
    boxContent.textContent += "\r\n";
    console.log(guesses);
    for (x=1; x<=guesses;x++){
        boxContent.textContent += "x "
    }
    if(!(wordEmptyArray.includes("_"))){
        boxContent.textContent += "\r\n";
        boxContent.textContent += "\r\n";
        boxContent.textContent += "Je hebt het woord geraden, de code is 68."
        win = true;
        
    }
    character.value = null;
    


}



showButton.addEventListener('click',show);
hideButton.addEventListener("click",hide);
startButton.addEventListener("click", start);
guessButton.addEventListener("click", guess)