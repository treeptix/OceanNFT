const images = [
    "image62.png",
    "image 45.png",
    "image58.png",
    "giphy1.png",
    "boll.png",
];

const imgElement = document.querySelector(".img-change");
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const newImageSrc = "img/" + images[currentIndex];
    imgElement.src = newImageSrc;
}

setInterval(changeImage, 4000);