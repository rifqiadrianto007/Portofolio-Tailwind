// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  }
};

//  Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik Out Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkmode', 'inactive');
};

// Cek status dark mode dari localStorage saat halaman dimuat
if (localStorage.getItem('darkmode') === 'active') {
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Contact Us to WhatsApp
function sendMessage() {
    const name = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    const url = "https://web.whatsapp.com/send?phone=6282332061664&text=Hallo%20Rifqi%2C%20%0ASaya%20*"+ name +"*%20dengan%"+ email +"%20*email*.%0A%0A*"+ pesan +"*";

    window.open(url);
}

function showPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.remove('hidden');
        popup.classList.add('flex');
    }
}

function hidePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.add('hidden');
    }
}

const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector('.logo-container').append(logo);
