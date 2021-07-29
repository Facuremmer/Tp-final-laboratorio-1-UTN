const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const cards = document.querySelector(".cards");
const navSubMenu = document.querySelector (".SUBmenubtn")
const navSUBMenuLink = document.querySelectorAll (".nav-SUBmenu")
const SubMenu = document.querySelector (".Guayubira")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
    cards.classList.toggle("esconderCards");


  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

navSubMenu.addEventListener("click", () => {
  SubMenu.classList.toggle("esconder");

  })

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function(){
      navMenu.classList.remove("nav-menu_visible");
      cards.classList.remove("esconderCards");
    })
  });

    navSUBMenuLink.forEach(navSUBMenuLink => {
      navSUBMenuLink.addEventListener("click", function(){
          SubMenu.classList.remove("esconder");
          navSUBMenuLink.classList.toggle("esconder");
    })
  });