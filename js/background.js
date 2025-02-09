const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;
bgImg.alt = "background image";
bgImg.className = "bg_img";

document.body.appendChild(bgImg);