let head = document.querySelector("header");
let megaMenu = document.querySelector(".megamenu");
let megaMenuLink = document.querySelector(".megamenu-link");
let megaArrow = document.querySelector(".mega-arrow");
let browserWidth = window.innerWidth;
let counterForMegaMenu = 0;

megaMenuLink.addEventListener("click", function () {
  counterForMegaMenu++;
  if (counterForMegaMenu % 2 != 0) {
    megaMenu.style.display = "flex";
    setTimeout(() => {
      megaMenu.style.top = `${head.clientHeight}px`;
      megaArrow.style.rotate = "180deg";
    }, 10);
  } else {
    megaMenu.style.display = "none";
    megaMenu.style.top = `${head.clientHeight + 50}px`;
    megaArrow.style.rotate = "0deg";
  }
});
// #################################################################
// #################################################################
let days = document.querySelector(".days")
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds =document.querySelector(".seconds")
setInterval(() => {
  if (seconds.innerHTML >= 1) {
    seconds.innerHTML = seconds.innerHTML - 1;
  } else {
    seconds.innerHTML = 60
  }
}, 1000);
setInterval(() => {
  if (minutes.innerHTML >= 1) {
    minutes.innerHTML = minutes.innerHTML - 1;
  } else {
    minutes.innerHTML = 60;
  }
}, 61000);
setInterval(() => {
  if (hours.innerHTML >= 1) {
    hours.innerHTML = hours.innerHTML - 1;
  } else {
    hours.innerHTML = 24;
  }
}, 3601000);
setInterval(() => {
  if (days.innerHTML >= 1) {
    days.innerHTML = days.innerHTML - 1;
  } else {
    days.innerHTML = 30;
  }
}, 86401000);