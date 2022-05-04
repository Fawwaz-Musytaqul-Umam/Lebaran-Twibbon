const slideNextBtn = document.querySelector('.next');
const slidePrevBtn = document.querySelector('.prev');
const twibbonImage = document.querySelector('.contents img');
const manImage = document.querySelector('.man');
const twibbonContainer = document.querySelector('.container-slider');
// const

//* Twibbon Slide Animation
let i = 1;
slideNextBtn.addEventListener("click", function (e) {
    if (i == 6) {
        i = 1;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
        twibbonAnimation();

    } else {
        i++;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
        twibbonAnimation();
    }
});


slidePrevBtn.addEventListener("click", function (e) {
    if (i == 1) {
        i = 6;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
        twibbonAnimation();

    } else {
        i--;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
        twibbonAnimation();
    }
});

function twibbonAnimation() {
    twibbonImage.style.animation = 'twibbon-img .4s';

    setTimeout(() => {
        twibbonImage.style.removeProperty('animation')
    }, 401);
}

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    //* Row-2 man Img Animation
    if (scrollY >= 530) {
        manImage.style.animation = `man-img 1s`;
        manImage.style.right = `-55vw`;
    } else {
        manImage.style.right = `-100vw`;
        manImage.style.removeProperty('animation');
    }

    //* Twibbon Slider Animation
    if (scrollY >= 467) {
        twibbonContainer.style.transition = '.8s';
        twibbonContainer.style.opacity = 1;
    } else {
        twibbonContainer.style.opacity = 0;
    }
})