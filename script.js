const hamburgerIcon = document.querySelector('.hamburger-icon').querySelector('i');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
hamburgerIcon.addEventListener('click', function() {
  modal.style.display = "grid";
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})
