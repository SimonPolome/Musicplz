"use strict";
let navButton = document.querySelector(".burger");
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");        
    }else{
        document.body.setAttribute("data-menu", true);        
    }
};

const navHome = document.querySelector('#navHome'),
    navAbout = document.querySelector('#navAbout'),
    navReleases = document.querySelector('#navReleases');
navHome.addEventListener('click',()=>{
    document.body.removeAttribute("data-menu");
});
navAbout.addEventListener('click',()=>{
    document.body.removeAttribute("data-menu");
});
navReleases.addEventListener('click',()=>{
    document.body.removeAttribute("data-menu");
});


const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

btnNext.addEventListener("click", next)
btnPrev.addEventListener("click", prev)

function next(){
    let elShow = document.querySelector(".slider__el--show");
    let elNext = elShow.nextElementSibling;
    elShow.classList.remove("slider__el--show");
    if(elNext){
        elNext.classList.add("slider__el--show");
    }else{
        let elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }    
};
function prev(){
    let elShow = document.querySelector(".slider__el--show");
    let elPrev = elShow.previousElementSibling;
    elShow.classList.remove("slider__el--show");
    if(elPrev){
        elPrev.classList.add("slider__el--show");
    }else{
        let elLast = elShow.parentNode.firstElementChild;
        elLast.classList.add("slider__el--show");
    }    
};

const slider = document.querySelector(".slider");
const hammerSlider = new Hammer(slider);

hammerSlider.on("swipeleft", next);
hammerSlider.on("swiperight", prev);

const soundBtn1 = document.querySelector('.song__icon--1');
const rotate1 = document.querySelector('.img--helmet--1');
let myAudio1 = document.querySelector('#dafunk');
soundBtn1.addEventListener('click',()=>{
    if(myAudio1.paused){
        myAudio1.play();
        soundBtn1.src = "assets/image/pause.svg";
        rotate1.classList.add("rotate");        
    }else{
        myAudio1.pause();
        soundBtn1.src = "assets/image/play.svg";  
        rotate1.classList.remove("rotate");        
    }
});

const soundBtn2 = document.querySelector('.song__icon--2');
const rotate2 = document.querySelector('.img--helmet--2');
let myAudio2 = document.querySelector('#onemoretime');
soundBtn2.addEventListener('click',()=>{
    if(myAudio2.paused){
        myAudio2.play();
        soundBtn2.src = "assets/image/pause.svg";
        rotate2.classList.add("rotate"); 
    }else{
        myAudio2.pause();
        soundBtn2.src = "assets/image/play.svg";
        rotate2.classList.remove("rotate"); 
    }
});

const soundBtn3 = document.querySelector('.song__icon--3');
const rotate3 = document.querySelector('.img--helmet--3');
let myAudio3 = document.querySelector('#robotrock');
soundBtn3.addEventListener('click',()=>{
    if(myAudio3.paused){
        myAudio3.play();
        soundBtn3.src = "assets/image/pause.svg";
        rotate3.classList.add("rotate"); 
    }else{
        myAudio3.pause();
        soundBtn3.src = "assets/image/play.svg";
        rotate3.classList.remove("rotate"); 
    }
});





const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("click");

    setTimeout(() => {
    cursor.classList.remove("click");
    }, 500)
})


let answerDate = document.querySelector(".Date");
            let today = new Date();
            let annee = today.getFullYear();
            answerDate.innerHTML = annee;