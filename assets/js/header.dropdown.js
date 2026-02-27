const navListClass = document.querySelector('.header__nav-list');
const dropdownButton = document.querySelector('.header__nav-dropdown');
const dropdownIcon = dropdownButton.querySelector('.header__nav-dropdown-button');
const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

let menuOpen = false;
let overlay = null;

// Create overlay element
function createOverlay() {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
  }
  return overlay;
}

// Remove overlay element
function removeOverlay() {
  if (overlay) {
    overlay.remove();
    overlay = null;
  }
}

// reset mobile dropdown when widening beyond breakpoint
mobileMediaQuery.addEventListener('change', function resetMobileDropdown() {
  if (!mobileMediaQuery.matches && menuOpen) {
    closeMenu();
  }
});

// toggle mobile menu and swap icon
function toggleMobileDropdown() {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  navListClass.classList.add('header__nav-list-show');
  menuOpen = true;

  dropdownIcon.classList.remove('fa-bars');
  dropdownIcon.classList.add('fa-xmark');
  dropdownButton.classList.add('open');
  dropdownButton.setAttribute('aria-label', 'Cerrar menú');
  dropdownButton.setAttribute('aria-expanded', 'true');

  // Show overlay
  createOverlay();
  setTimeout(() => overlay.classList.add('menu-overlay-show'), 10);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navListClass.classList.remove('header__nav-list-show');
  menuOpen = false;

  dropdownIcon.classList.remove('fa-xmark');
  dropdownIcon.classList.add('fa-bars');
  dropdownButton.classList.remove('open');
  dropdownButton.setAttribute('aria-label', 'Abrir menú');
  dropdownButton.setAttribute('aria-expanded', 'false');

  // Hide overlay
  if (overlay) {
    overlay.classList.remove('menu-overlay-show');
    setTimeout(removeOverlay, 300);
  }

  // Restore body scroll
  document.body.style.overflow = 'auto';
}

dropdownButton.addEventListener('click', toggleMobileDropdown);

// Close menu when clicking on a link
const navLinks = navListClass.querySelectorAll('.header__nav-link, .header__nav-link-selected');
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});



