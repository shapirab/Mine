const navDisplay = document.querySelector('.nav-bar');
const navDisplayBtn = document.querySelector('.nav--btn');

navDisplayBtn.addEventListener('click', () =>{
    navDisplay.classList.toggle('active');
});