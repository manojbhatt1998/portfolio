document.addEventListener('DOMContentLoaded', () => {

const mouse = document.querySelector('.lens');
const content = document.querySelector('.content');
mouse.style.opacity = 0;

content.addEventListener('mousemove', (e) => {
  mouse.style.opacity = 1;

  const rect = content.getBoundingClientRect();
  const x = e.clientX - rect.left; // x relative to .content
  const y = e.clientY - rect.top;  // y relative to .content

  // Position the lens
  mouse.style.left = `${x - mouse.offsetWidth / 2}px`;
  mouse.style.top = `${y - mouse.offsetHeight / 2}px`;

  // Adjust background position inside lens
  const bgX = -x / 2;
  const bgY = -y / 2;
  mouse.style.backgroundPosition = `${bgX}px ${bgY}px`;
});

// Hide lens when leaving content
content.addEventListener('mouseleave', () => {
  mouse.style.opacity = 0;
});


// TYPED.JS ANIMATION
jQuery(document).ready(function () {
  var typed = new Typed('.write', {
    strings: [
      "front end developer.",
      "Shopify Ecommerce",
      "Wordpress Developer",
      "Wix.",
      "Web Designer.",
      "PHP Developer.",
      "React Developer.",
      "Node.js Developer."
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    startDelay: 0
  });
});


// NAV DOT CURSOR & LINK HOVER EFFECTS
(function () {
  const dot = document.querySelector(".dot");
  dot.style.transition = "left 0.1s ease, top 0.1s ease";
  
  const links = document.querySelectorAll("nav > .hover-this");

  const animateit = function (e) {

    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === "mouseleave") span.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
  };

  links.forEach((link) => link.addEventListener("mousemove", animateit));
  links.forEach((link) => link.addEventListener("mouseleave", animateit));
  window.addEventListener("mousemove", editCursor);
})();

// mobile menu toggle
const hamburger = document.querySelector('.Header_hamburger_box__bVA68');
const drawer = document.getElementById('mobileDrawer');
hamburger.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
  

});
