const showButton = document.querySelector("#startGame");
const backButton = document.querySelector("#answerBack");
const backGeneral = document.getElementById("#backButton");
let correctGuess;
math1 = document.querySelector("#math1");
math2 = document.querySelector("#math2");
math3 = document.querySelector("#math3");
math4 = document.querySelector("#math4");
math5 = document.querySelector("#math5");
math6 = document.querySelector("#math6");
math7 = document.querySelector("#math7");

let sumArray=[]

function showScreen(){
    document.getElementById("startGame").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(10px)";
    document.getElementById("gameMath").style.visibility = "visible";
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("backButton").style.visibility = "hidden";
}
function hideScreen(){
    if(correctGuess == true){
        document.getElementById("nextButton").style.visibility = "visible";
    }
    document.getElementById("startGame").style.visibility = "visible";
    document.getElementById("gameMath").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(0px)";
    document.getElementById("backButton").style.visibility = "visible";
}

function placeNumber(value){
    let order = ["+","-"," +","-","+","-","="]
    let numberOrder = [11, 9, 7, 3, 5, 21, 13]
    let answerBox = document.getElementById("answerBox");
    answerBox.textContent=null;
    let checker = false;
    for(x = 0; x < sumArray.length; x++){
        if (sumArray[x] == value ){
            checker = true;
        }
    }
    
    if(checker != true){
    sumArray.push(value);
    }  
    for(y = 0; y < sumArray.length; y++){
        answerBox.textContent+= sumArray[y] + order[y];
    }
    if(sumArray.length == 7){
        for(y = 0; y < sumArray.length; y++){
            console.log(sumArray[y],numberOrder[y]);
            if(sumArray[y] !== numberOrder[y]){
                correctGuess = false;
            }
        } if(correctGuess !== false){
            correctGuess = true;
            console.log("True");
            document.getElementById("answerBox").style.backgroundColor = "Green";
            answerBox.textContent += 19
        }
        else{
            document.getElementById("answerBox").style.backgroundColor = "Red";
        }
        
}    
}






math1.addEventListener("click", function(){placeNumber(11)});
math2.addEventListener("click", function(){placeNumber(9)});
math3.addEventListener("click", function(){placeNumber(7)});
math4.addEventListener("click", function(){placeNumber(3)});
math5.addEventListener("click", function(){placeNumber(5)});
math6.addEventListener("click", function(){placeNumber(21)});
math7.addEventListener("click", function(){placeNumber(13)});
showButton.addEventListener("click", showScreen);
backButton.addEventListener("click", hideScreen);
