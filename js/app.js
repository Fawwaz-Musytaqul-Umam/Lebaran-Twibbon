const slideNextBtn = document.querySelector('.next');
const slidePrevBtn = document.querySelector('.prev');
const twibbonImage = document.querySelector('.contents img');
const manImage = document.querySelector('.man');
const twibbonContainer = document.querySelector('.container-slider');

//* Twibbon Slide Animation
let i = 1;
slideNextBtn.addEventListener("click", function (e) {
    if (i == 6) {
        i = 1;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);

    } else {
        i++;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
    }
});


slidePrevBtn.addEventListener("click", function (e) {
    if (i == 1) {
        i = 6;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);

    } else {
        i--;
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
    }
});

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

// ketika twibbon dipilih
const preview = twibbonContainer.querySelector('.preview')
const pilihTwibbon = twibbonContainer.querySelector('.pilih-twibbon');
const upload = twibbonContainer.querySelector(".upload");
const input = twibbonContainer.querySelector("input");
const reload = twibbonContainer.querySelector(".reload")


pilihTwibbon.addEventListener('click', function () {
    this.style.display = 'none';

    upload.style.display = 'block';
    reload.style.display = 'block';
    preview.innerHTML = `<img src="${twibbonImage.src}" id="twibbon" style="width: 80vw;">`;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    canvas.setAttribute("hidden", "true");
    preview.appendChild(canvas);
});

upload.addEventListener("click", function () {
    input.click();
})

document.querySelector("input").addEventListener("change", function (e) {
    
    const user = document.createElement("img");
    user.src = URL.createObjectURL(e.target.files[0]);
    
    user.onload = () => {
        const download = twibbonContainer.querySelector(".button .download");
        drawCanvas(user);

        download.style.display = 'block';
        download.style.width = '24vw';
    }
})

function drawCanvas(user) {
    const gambarTwibbon = document.getElementById('twibbon');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 340;
    canvas.height = 340;

    context.drawImage(user, 0, 0, 340, 340);
    context.drawImage(gambarTwibbon, 0, 0, 340, 340);

    user.remove();
    gambarTwibbon.remove();
    upload.remove()
    input.remove()

    reload.style.width = "10vw";
    canvas.removeAttribute("hidden");
    downloadLink();
}

function downloadLink() {
    const download = document.querySelector(".download");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");

    download.addEventListener("click", function () {
        link.setAttribute("download", "Lebaran 1443H")
        link.click();
        alert("Berhasil mendownload\nTERIMAKASIH telah berkunjung ke aplikasi ini");
    })
}