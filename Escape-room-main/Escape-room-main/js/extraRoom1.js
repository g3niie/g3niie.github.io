const showBTN = document.querySelector("#extraRoomStartButton1");
const hideBTN = document.querySelector("#extraRoomButton1");


function show(){
    console.log("test");
    document.getElementById("box").style.visibility = "visible";
    document.getElementById("background").style.filter = "blur(10px)";
    document.getElementById("extraRoomStartButton1").style.visibility = "hidden";
}

function hide(){
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("background").style.filter = "blur(0px)";
    document.getElementById("extraRoomStartButton1").style.visibility = "visible";

}



showBTN.addEventListener("click",show);
hideBTN.addEventListener("click",hide);
