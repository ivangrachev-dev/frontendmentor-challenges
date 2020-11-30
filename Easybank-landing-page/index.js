let dropBtn = document.querySelector('.dropdown-btn');
let dropContent = document.querySelector('.dropdown-content');

dropBtn.onclick = function() {
  dropContent.classList.toggle('show');
}
