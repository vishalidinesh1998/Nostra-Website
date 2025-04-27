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

const totalimages = images.length;
let index = 0;

rightArrow.addEventListener('click', () => {
    console.log("Right arrow is clicked");
    index = (index + 1) % totalimages;
    updateslide();
});

leftArrow.addEventListener('click', () => {
    console.log("Left arrow is clicked");
    index = (index - 1 + totalimages) % totalimages;
    updateslide();
});

function updateslide() {
    slideContainer.style.transform = `translateX(-${index * 100}vw)`;
}











const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach((heart) => {
    heart.addEventListener('click', function () {
        heart.classList.toggle('heart-active');
    });
});
