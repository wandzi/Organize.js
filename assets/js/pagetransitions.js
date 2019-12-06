window.addEventListener("load", function(){
    
// Variables 

var beginBtn = document.querySelector('#beginBtn'),
    aboutBtn = document.querySelector('#aboutBtn'),
    welcomePage = document.querySelector('#welcomePage'),
    aboutPage = document.querySelector('#about'),
    appPage = document.querySelector('#calendar-app');

// Function

function transition1() {
   welcomePage.classList.remove("active");
   aboutPage.classList.add("active");
}
    
function transition2() {
   aboutPage.classList.remove("active");
   appPage.classList.add("active");
}

// ---

beginBtn.addEventListener('click', transition1);
aboutBtn.addEventListener('click', transition2);

});

