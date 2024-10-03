// Navbar Fixed
window.onscroll = function () {
          const header = document.querySelector('header');
          const fixedNav = header.offsetTop;
          const toTop = document.querySelector('#to-top');

          if (window.scrollY > fixedNav) {
                    header.classList.add('navbar-fixed');
                    toTop.classList.remove('hidden');
                    toTop.classList.add('flex');
          } else {
                    header.classList.remove('navbar-fixed');
                    toTop.classList.add('flex');
                    toTop.classList.remove('hidden');
          }
};

//  Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
          hamburger.classList.toggle('hamburger-active');
          navMenu.classList.toggle('hidden');
});

// Klik Out Hamburger
window.addEventListener('click', function(e) {
          if (e.target != hamburger && e.targer != navMenu) {
          hamburger.classList.remove('hamburger-active');
          navMenu.classList.add('hidden');
          }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
          if (darkToggle.checked) {
                    html.classList.add('dark');
          } else {
                    html.classList.remove('dark');
          }
});
