const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.querySelector('.burger-menu-btn');
  const menu = document.querySelector('.menu');

  burgerBtn.addEventListener('click', function() {
    menu.classList.toggle('open');
     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
});
