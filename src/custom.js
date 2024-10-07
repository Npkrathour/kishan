// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false, 
  dots: false,
  smartSpeed: 500, 
  autoplaySpeed: 800,
  navSpeed: 800,
  navText: [
    '<span class="iconify" data-icon="oui:arrow-left"></span>',
    '<span class="iconify" data-icon="oui:arrow-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1180: {
      items: 4,
    },
  },
});

