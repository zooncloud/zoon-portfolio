// Menu burger responsive pour la navigation

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('header nav');
    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('nav-open');
            burger.classList.toggle('active');
        });
    }
});
