const menuList = document.querySelector("#menu-list");
const burger = document.querySelector(".burger");
const header = document.querySelector("header");
burger.addEventListener("click", function () {
  menuList.classList.toggle("active");
  burger.classList.toggle("active");
  header.classList.toggle("active");
});
