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
gsap.registerPlugin(ScrollTrigger);

var tl6 = gsap.timeline();

// Animate .animate-3
tl6.from(".newslatter .animate-3", {
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: ".animate-3",
    start: "top 50%",
    scrub: true, // Corrected the scrub to boolean
    stagger: 0.5,
  },
});

// Animate .animate-4
tl6.from(".newslatter .animate-4", {
  duration: 1,
  rotate: 180,
  scrollTrigger: {
    trigger: ".animate-4",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

// Animate .animate-5
tl6.from(".newslatter .animate-5", {
  duration: 1,
  rotate: 90,
  scrollTrigger: {
    trigger: ".animate-5",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

// Animate .animate-6
tl6.from(".newslatter .animate-6", {
  duration: 1,
  rotate: 70,
  scrollTrigger: {
    trigger: ".animate-6",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});

// Animate .animate-7
tl6.from(".newslatter .animate-7", {
  duration: 1,
  rotate: 90,
  scrollTrigger: {
    trigger: ".animate-7",
    start: "top 50%",
    scrub: true, // Corrected scrub
    stagger: 0.5,
  },
});
