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
        twibbonAnimation();
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);

    } else {
        i++;
        twibbonAnimation();
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
    }
});


slidePrevBtn.addEventListener("click", function (e) {
    if (i == 1) {
        i = 6;
        twibbonAnimation();
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);

    } else {
        i--;
        twibbonAnimation();
        twibbonImage.setAttribute("src", `asset/template/Twibbon${i}.png`);
    }
});

function twibbonAnimation() {
    twibbonImage.style.animation = 'twibbon-img .2s';

    setTimeout(() => {
        twibbonImage.style.removeProperty('animation')
    }, 200);
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
    const selesai = twibbonContainer.querySelectorAll(".button .selesai");
    const download = document.querySelector(".download");

    const user = document.createElement("img");
    user.src = URL.createObjectURL(e.target.files[0]);

    user.onload = () => {
        drawCanvas(user);
        downloadLink(download, selesai);
    }
})

function drawCanvas(user) {
    const gambarTwibbon = document.getElementById('twibbon');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.height = 294;
    canvas.width = 294;

    context.drawImage(user, 0, 0, 294, 294);
    context.drawImage(gambarTwibbon, 0, 0, 294, 294);

    user.remove();
    gambarTwibbon.remove();
    upload.remove()
    input.remove()

    reload.style.width = "10vw";
    canvas.removeAttribute("hidden");
    _share(canvas);
}

function downloadLink(download, selesai) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");

    selesai.forEach(e => {
        e.style.display = 'block';
        e.style.width = '24vw';
    });

    download.addEventListener("click", function () {
        link.setAttribute("download", "Lebaran 1443H")
        link.click();
        alert("Berhasil mendownload\nTERIMAKASIH telah berkunjung ke aplikasi ini");
    })
}

function _share(image) {
    const share = document.querySelector(".share");
    const shareLink = document.createElement("a");

    shareLink.href = linkText(image);
    share.addEventListener("click", function () {
        shareLink.click();
    })
}

function linkText(image) {
    return `whatsapp://send?text=${encodeURIComponent(image)} Kumandang takbir bergema, kerinduaan akhirnya berujung temu, kebahagiaan singgah di setiap rumah, maka izinkan kusampaikan minal aidzin wal faidzin, mohon maaf lahir dan batin.

    Selamat hari Raya Idul Fitri 1443H


    mau buat foto menyambut lebaran juga??
    klik link ini https://Fawwaz-Musytaqul-Umam.github.io/Lebaran-Twibbon`;
}