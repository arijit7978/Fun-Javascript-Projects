const slide = document.querySelector("#slider img");
const left_btn = document.querySelector(".left_btn");
const right_btn = document.querySelector(".right_btn");


images = ["images/Water.jpg", "images/sunset.jpg", "images/moon.jpg", "images/stars.jpg", "images/sunflowers.jpg"]
let indx = 0

function right_draw() {
  if (indx < 4) {
    indx++;
  }
  else {
    indx = 0;
  }
 slide.src = images[indx];
};

function left_draw() {
  if (indx == 0) {
    indx = 4;
  }
  else {
    indx -= 1;
  }
  slide.src = images[indx];
};


left_btn.addEventListener('click', left_draw)
right_btn.addEventListener('click', right_draw)
