const slideNextBtn = document.querySelector('.next');
const slidePrevBtn = document.querySelector('.prev');
const twibbonImage = document.querySelector('.contents img');
const manImage = document.querySelector('.man');
const sliderContainer = document.querySelector('.container-slider');
// const

//* Twibbon Slide Animation
let i = 1;
slideNextBtn.addEventListener("click", function (e) {
    if (i == 7) {
        i = 1;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
        twibbonAnimation();

    } else {
        i++;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
        twibbonAnimation();
    }
});


slidePrevBtn.addEventListener("click", function (e) {
    if (i == 1) {
        i = 7;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
        twibbonAnimation();

    } else {
        i--;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
        twibbonAnimation();
    }
});

function twibbonAnimation() {
    twibbonImage.style.animation = 'twibbon-img .4s';

    setTimeout(() => {
        twibbonImage.style.removeProperty('animation')
    }, 500);
}

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    //* Row-2 man Img Animation
    if (scrollY >= 650) {
        manImage.style.right = `-50vw`;
    } else {
        manImage.style.right = `${scrollY - 700}vw`;
    }

    //* Twibbon Slider Animation
    if (scrollY >= 467) {
            sliderContainer.style.transition = '.8s';
            sliderContainer.style.opacity = 1;
        } else {
            sliderContainer.style.opacity = 0;
    }
})