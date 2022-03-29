"use strict";
const d = document;

const _toggle = d.querySelector(".toggle");
const _menu = d.querySelector(".menu");

d.addEventListener("click", (e) => {
  if (e.target.matches(".toggle ion-icon")) {
    _menu.classList.toggle("active");
  }
});
