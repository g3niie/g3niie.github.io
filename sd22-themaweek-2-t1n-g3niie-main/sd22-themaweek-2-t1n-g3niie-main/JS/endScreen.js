console.log('File loaded');
//The home page button so you can go back to the index.html of the game
const homePageButton = document.querySelector('button.homePage');
homePageButton.addEventListener('click', homeScreen);
function homeScreen(){
    location.href = 'index.html'
}