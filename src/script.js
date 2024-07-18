window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about');
    const aboutTop = aboutSection.offsetTop;
    const aboutHeight = aboutSection.offsetHeight;
    const scrollTop = window.scrollY;
  
    if (scrollTop > aboutTop - aboutHeight / 2) {
      aboutSection.classList.add('active');
    } else {
      aboutSection.classList.remove('active');
    }
});

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
});