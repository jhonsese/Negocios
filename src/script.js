// header scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// scroll aparecer about
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    aboutSection.classList.add('scroll-activated');
  } else {
    aboutSection.classList.remove('scroll-activated');
  }
});