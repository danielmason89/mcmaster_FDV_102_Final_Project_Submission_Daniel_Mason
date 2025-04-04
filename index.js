export default function myFunction() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menuToggleButton').addEventListener('click', myFunction);
});