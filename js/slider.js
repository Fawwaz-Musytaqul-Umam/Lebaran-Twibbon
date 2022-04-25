const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const image = document.querySelector('.contents img');
let i = 1;

nextBtn.addEventListener("click", function (e) {
    if (i == 7) {
        i = 1;
        image.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
    } else {
        i++;
        image.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
    }
});


prevBtn.addEventListener("click", function (e) {
    if (i == 1) {
        i = 7;
        console.log(i);
        image.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
    } else {
        i--;
        console.log(i);
        image.setAttribute("src", `asset/template/Twibbon${i}.jpg`);
    }
});