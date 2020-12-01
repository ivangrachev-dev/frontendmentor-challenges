let dropBtn = document.querySelector('.dropdown-btn');
let dropContent = document.querySelector('.dropdown-content');
let nav = document.querySelector('.nav');
let navSpacer = document.querySelector('.nav-spacer');

dropBtn.onclick = function() {
  dropContent.classList.toggle('show');
  nav.classList.toggle('sticky');
  navSpacer.classList.toggle('show-spacer');
}
