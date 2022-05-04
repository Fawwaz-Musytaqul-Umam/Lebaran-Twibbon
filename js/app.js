const preview = twibbonContainer.querySelector('.preview')
const pilihTwibbon = twibbonContainer.querySelector('.pilih-twibbon');
const upload = twibbonContainer.querySelector(".upload");
const input = twibbonContainer.querySelector("input");
const reload = twibbonContainer.querySelector(".reload")


pilihTwibbon.addEventListener('click', function () {
    this.style.display = 'none';

    upload.style.display = 'block';
    reload.style.display = 'block';
    input.style.display = 'block';
    preview.innerHTML = `<img src="${twibbonImage.src}" id="twibbon" style="width: 80vw;">`;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    canvas.setAttribute("hidden", "true");
    preview.appendChild(canvas)
});

document.querySelector("input").addEventListener("change", function (e) {
    const selesai = twibbonContainer.querySelectorAll(".button .selesai");
    const download = document.querySelector(".download");
    const share = document.querySelector(".share");

    const user = document.createElement("img");
    user.src = URL.createObjectURL(e.target.files[0]);

    user.onload = () => {
        drawCanvas(user, share);
        downloadLink(download, selesai);
    }
})

function drawCanvas(user, share) {
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
    canvas.removeAttribute("hidden")
    _share(share, canvas)
}

function downloadLink(download, selesai) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpg");

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

function _share(share, image) {
    const shareLink = document.createElement("a");
    shareLink.href = linkText(image);
    share.addEventListener("click", function () {
        shareLink.click();
    })
}

function linkText(image) {
    return `whatsapp://send?text=${image.toDataURL('image/jpg')}
    Kumandang takbir bergema, kerinduaan akhirnya berujung temu, kebahagiaan singgah di setiap rumah, maka izinkan kusampaikan minal aidzin wal faidzin, mohon maaf lahir dan batin.Selamat Idul Fitri 2022
    mau buat foto menyambut lebaran juga??
    klik link ini https://Fawwaz-Musytaqul-Umam.github.io/Lebaran-Twibbon`;
}