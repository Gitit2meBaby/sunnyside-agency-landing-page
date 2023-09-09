const mobileNav = document.getElementById('mobileNav');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});