const navbar = document.getElementsByTagName("nav")[0];
// const navItem = document.getElementsByClassName("nav-item");
const navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
const navbarNav = document.getElementById("navbarNav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.classList.replace("bg-transparent", "bg-dark");
    navbar.classList.replace("pt-4", "pt-2");
    navbar.classList.replace("pb-4", "pb-2");
  } else if (window.scrollY <= 10) {
    navbar.classList.replace("bg-dark", "bg-transparent");
    navbar.classList.replace("pt-2", "pt-4");
    navbar.classList.replace("pb-2", "pb-4");
  }
});

navbarNav.addEventListener("click", function () {
  navbarToggler.setAttribute("aria-expanded", "false");
  navbarToggler.classList.toggle("collapsed");

  navbarNav.classList.toggle("show");
});
