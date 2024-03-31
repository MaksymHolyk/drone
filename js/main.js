let textWrapper = document.querySelector(".title");

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
// Text animation

anime.timeline().add({
  targets: ".title .letter",
  translateY: [-200, 0],
  easing: "easeOutExpo",
  duration: 1500,
  delay: (el, i) => 300 + 50 * i,
});
// Drone animation
TweenMax.to(".container", 2, {
  top: "-50%",
  ease: "Expo.easeInOut",
  delay: 1,
});

TweenMax.to(".container", 2, {
  scale: "1",
  top: "25vh",
  ease: "Expo.easeInOut",
  delay: 4,
});
// nav-bar animation

TweenMax.staggerFrom(
  ".navbar > div",
  1.5,
  {
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
    delay: 0.5,
  },
  0.08
);
// Animation site menu
TweenMax.staggerFrom(
  ".site-menu > div",
  2,
  {
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
    delay: 1,
  },
  0.08
);

// Animation bottom elements

TweenMax.staggerFrom(
  ".info, .prev-imgs > div, .marquee",
  1,
  {
    opacity: 0,
    y: 100,
    ease: Power1.easeInOut,
    delay: 1,
  },
  0.01
);
TweenMax.staggerFrom(
  ".do-now",
  1,
  {
    opacity: 0,
    y: 100,
    ease: Power1.easeInOut,
    delay: 4.5,
  },
  0.01
);
