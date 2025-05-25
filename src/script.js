const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("backdrop-blur-lg", "bg-white/30");
  } else {
    navbar.classList.remove("backdrop-blur-lg", "bg-white/30");
  }
});

// humberger menu
const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // cegah klik dari merambat ke document
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");
});

// Tutup menu jika klik di luar mobile menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickToggle = toggle.contains(e.target);

  const isMenuOpen = !mobileMenu.classList.contains("translate-x-full");

  if (!isClickInsideMenu && !isClickToggle && isMenuOpen) {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
  }
});

const words =
  "A simple note-taking app that helps you keep track of your notes and tasks";
let charIndex = 0;
let isDeleting = false;
const speed = 150;
const pause = 1000;

function typing() {
  const displayText = document.getElementById("typing-hero");

  if (isDeleting) {
    displayText.textContent = words.substring(0, charIndex--);
  } else {
    displayText.textContent = words.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === words.length) {
    isDeleting = true;
    setTimeout(typing, pause);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    setTimeout(typing, 200);
  } else {
    setTimeout(typing, isDeleting ? 50 : speed);
  }
}
window.onload = typing;

// const words = [
//   "A simple note-taking app that helps you keep track of your notes and tasks",
// ];
// let currentWordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const speed = 150;
// const pause = 1000;

// function type() {
//   const currentWord = words[currentWordIndex];
//   const displayElement = document.getElementById("typing-hero");

//   if (isDeleting) {
//     displayElement.textContent = currentWord.substring(0, charIndex--);
//   } else {
//     displayElement.textContent = currentWord.substring(0, charIndex++);
//   }

//   if (!isDeleting && charIndex === currentWord.length) {
//     isDeleting = true;
//     setTimeout(type, pause);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     currentWordIndex = (currentWordIndex + 1) % words.length;
//     setTimeout(type, 200);
//   } else {
//     setTimeout(type, isDeleting ? 50 : speed);
//   }
// }

// window.onload = type;
