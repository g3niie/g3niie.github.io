console.log('File loaded');

//alle elementen van HTML bestand opgenomen
const discord = document.querySelector('div.discord');
const github = document.querySelector('div.github');
const email = document.querySelector('div.email');
const linkedIn = document.querySelector('div.linked-in');

//alle addEventListeners aangezet om naar het website te gaan
discord.addEventListener('click', goToDiscord);
github.addEventListener("click", goToGithub);
email.addEventListener("click", goToEmail);
linkedIn.addEventListener('click', goToLinkedIn);

//alle functions van addEventListeners aangezet zodan het jou naar het website brengt
function goToDiscord(){
    window.location.href = 'https://discord.gg/egirl';
}
function goToGithub(){
    window.location.href = 'https://github.com';
}
function goToEmail(){
    window.location.href = 'mailto: nemipeckie@gmail.com';
}
function goToLinkedIn(){
    window.location.href = 'https://linkedIn.com';
}
