const navListClass = document.querySelector('.header__nav-list');
const dropdownButton = document.querySelector('.header__nav-dropdown-button');
const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

var toggleFlag = 0;

/**
 * Toggles the 'header__nav-list-show' class on the navList if the mediaQuery increases
 * more than 600px and resets toggleFlag changes to 1.
 * 
 * @param navList Class of the navbar that contains redirect links
 */

mobileMediaQuery.addEventListener('change', function resetMobileDropdown() 
{
  if (!mobileMediaQuery.matches) 
  {
    if(toggleFlag == 1) 
    {
      navListClass.classList.toggle('header__nav-list-show');
      toggleFlag--;
    }
  }
});

/**
 * Changes the visibility of the mobile menu and updates the toggleFlag variable.
 * 
 * @param navList Class of the navbar that contains redirect links
 */
dropdownButton.addEventListener('click', function toggleMobileDropdown() 
{
  navListClass.classList.toggle('header__nav-list-show');

  (toggleFlag == 0) ? toggleFlag++ : toggleFlag--;

});


