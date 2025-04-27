var menu=document.getElementById("menu")
var sidenav=document.querySelector(".sidenav")
var close=document.getElementById("close")

menu.addEventListener("click",function(){
    sidenav.style.left="0"

})
close.addEventListener("click",function(){
    sidenav.style.left = "-50%"
})


const slideContainer = document.querySelector('.slide-image-container');
const images = document.querySelectorAll('.slide-image-container img');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

let currentIndex = 0;

function updateSlidePosition() {
    const imageWidth = images[0].clientWidth;
    slideContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function adjustContainerWidth() {
    const imageWidth = images[0].clientWidth;
    slideContainer.style.width = `${images.length * imageWidth}px`;
}

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSlidePosition();
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; 
    }
    updateSlidePosition();
});

window.addEventListener('resize', () => {
    adjustContainerWidth();
    updateSlidePosition();
});

// When page loads
adjustContainerWidth();
updateSlidePosition();




const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach((heart) => {
    heart.addEventListener('click', function () {
        heart.classList.toggle('heart-active');
    });
});
