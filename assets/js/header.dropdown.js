// get the dropdown button element
const dropdownButton = document.querySelector('.header__nav-dropdown-button');

// add a click event listener to the dropdown button
dropdownButton.addEventListener('click', function() {
  // get the header__nav-list element
  const navList = document.querySelector('.header__nav-list');

  // toggle the CSS classes to show/hide the nav list and the dropdown button
  navList.classList.toggle('header__dropdown-enabled');
});