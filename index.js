export default function myFunction() {
  const nav = document.getElementById("myTopnav");
  const menuIcon = document.querySelector('#menuToggleButton i');

  if (nav.className === 'topnav') {
    nav.className += ' responsive';

    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    nav.className = 'topnav';

    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('menuToggleButton')
    .addEventListener('click', myFunction);
});