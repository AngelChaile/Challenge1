const navListClass = document.querySelector('.header__nav-list');
const dropdownButton = document.querySelector('.header__nav-dropdown');
const dropdownIcon = dropdownButton.querySelector('.header__nav-dropdown-button');
const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

let menuOpen = false;

// reset mobile dropdown when widening beyond breakpoint
mobileMediaQuery.addEventListener('change', function resetMobileDropdown() {
  if (!mobileMediaQuery.matches && menuOpen) {
    navListClass.classList.remove('header__nav-list-show');
    dropdownIcon.classList.remove('fa-xmark');
    dropdownIcon.classList.add('fa-bars');
    dropdownButton.setAttribute('aria-expanded', 'false');
    menuOpen = false;
  }
});

// toggle mobile menu and swap icon
function toggleMobileDropdown() {
  navListClass.classList.toggle('header__nav-list-show');
  menuOpen = !menuOpen;

  if (menuOpen) {
    dropdownIcon.classList.remove('fa-bars');
    dropdownIcon.classList.add('fa-xmark');
    dropdownButton.setAttribute('aria-label', 'Cerrar menú');
    dropdownButton.setAttribute('aria-expanded', 'true');
  } else {
    dropdownIcon.classList.remove('fa-xmark');
    dropdownIcon.classList.add('fa-bars');
    dropdownButton.setAttribute('aria-label', 'Abrir menú');
    dropdownButton.setAttribute('aria-expanded', 'false');
  }
}

dropdownButton.addEventListener('click', toggleMobileDropdown);



