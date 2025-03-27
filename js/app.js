let viewport = {
    width: innerWidth,
    height: innerHeight
};

const carImg = document.getElementById("placeholder");
carImg.width = viewport.width;
carImg.height = viewport.height;

// Define the Z index of the car
carImg.zIndex = 0;

// Define the Z index of the H1 and its subtitle
const companyName = document.querySelector("h1");
const subtitle = document.querySelector("p");
companyName.zIndex = 1;
subtitle.zIndex = 1;

console.log(viewport)

console.log({ car_zIndex: carImg.zIndex, h1_zIndex: companyName.zIndex, subtitle_zIndex: subtitle.zIndex });

// Set the H1 (and its subtitle) upper than the car image
companyName.width = innerWidth/2
companyName.height = innerHeight/2

subtitle.width = innerWidth/2
subtitle.height = innerHeight/2 + 30