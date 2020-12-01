let dropBtn = document.querySelector('.dropdown-btn');
let dropContent = document.querySelector('.dropdown-content');
let nav = document.querySelector('.nav');
let navSpacer = document.querySelector('.nav-spacer');



dropBtn.onclick = function() {
  // Showing navbar menu
  dropContent.classList.toggle('show');

  // Toggle hamburger and close icons.
  dropBtn.classList.toggle('close-btn');

  // Making navbar fixed
  nav.classList.toggle('sticky');

  // Add proper amount of space when navbar menu appears.
  navSpacer.classList.toggle('show-spacer');
}
