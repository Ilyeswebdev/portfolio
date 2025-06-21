const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
menu.addEventListener("click", toggleMenu);
icon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const contact = document.getElementById("contact-btn");
contact.addEventListener("click", function () {
  window.location.href = "#contact";
});
