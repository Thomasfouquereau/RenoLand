const navBtn = document.querySelector('.navbar-btn-mobile');
const closeBtn = document.querySelector('.mobile-close-btn');
const navMenu = document.querySelector('.mobile-navbar');

navBtn.addEventListener('click', () => {
    navMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    navMenu.style.display = 'none';
});
