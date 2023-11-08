const navDisplay = document.querySelector('.nav-bar');
const navDisplayBtn = document.querySelector('.nav--btn');
const heroIconContainer = document.querySelector('.hero--icon-container');

let heroIcons = ['\\f5d1', '\\f810', '\\f578', '\\f563', '\\f4d8', '\\f7fb', '\\f551'];
let heroIndex = 0;

//TODO: make active again when the navDisplayBtn exists in the html
// navDisplayBtn.addEventListener('click', () =>{
//     navDisplay.classList.toggle('active');
// });

setInterval(setHeroIcon, 4000);

function setHeroIcon(){
    heroIconContainer.style.setProperty('--content', `"${heroIcons[heroIndex]}"`);
    if(heroIndex < heroIcons.length -1){
        heroIndex++;
    }
    else{
        heroIndex = 0;
    }
}