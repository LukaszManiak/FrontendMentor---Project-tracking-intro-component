"use strict";

//items
const navHamburger = document.querySelector(".nav-menu-btn");
const navMenuModal = document.querySelector(".hamburger-menu");
const hamburgerImg = document.querySelector(".nav-hamburger-img");

//toggeling hamburger menu
let isOpen = false;

navHamburger.addEventListener("click", function () {
  if (!isOpen) {
    hamburgerImg.src = "/images/icon-close.svg";
    isOpen = !isOpen;
  } else {
    hamburgerImg.src = "/images/icon-hamburger.svg";
    isOpen = !isOpen;
  }

  navMenuModal.classList.toggle("hidden");
});
