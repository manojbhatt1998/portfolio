document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded");

  // ==============================
  // MAGNIFYING GLASS EFFECT
  // ==============================
  const mouse = document.querySelector('.lens');
  const content = document.querySelector('.content');

  if (mouse && content) {
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

    content.addEventListener('mouseleave', () => {
      mouse.style.opacity = 0;
    });
  } else {
    console.warn("Magnifying glass effect skipped — '.lens' or '.content' not found.");
  }


  // ==============================
  // TYPED.JS ANIMATION
  // ==============================
  if (document.querySelector('.write')) {
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
  } else {
    console.warn("Typed.js animation skipped — element '.write' not found.");
  }


  // ==============================
  // NAV DOT CURSOR & LINK HOVER EFFECTS
  // ==============================
  (function () {
    const dot = document.querySelector(".dot");
    const links = document.querySelectorAll("nav > .hover-this");

    if (dot && links.length > 0) {
      dot.style.transition = "left 0.1s ease, top 0.1s ease";

      const animateit = function (e) {
        const span = this.querySelector("span");
        if (!span) return;

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

      links.forEach((link) => {
        link.addEventListener("mousemove", animateit);
        link.addEventListener("mouseleave", animateit);
      });
      window.addEventListener("mousemove", editCursor);
    } else {
      console.warn("Cursor or nav links not found — skipping cursor animation.");
    }
  })();


// ==============================
// MOBILE MENU TOGGLE + OUTSIDE CLICK CLOSE
// ==============================
const hamburger = document.querySelector('.Header_hamburger_box__bVA68');
const drawer = document.getElementById('mobileDrawer');
const body = document.body;

if (hamburger && drawer) {
  // Toggle drawer open/close
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent immediate outside click close
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideDrawer = drawer.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideDrawer && !isClickOnHamburger && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      body.classList.remove('no-scroll');
    }
  });
} else {
  console.warn("Mobile menu not found — skipping drawer toggle.");
}


});//end of DOMContentLoaded
