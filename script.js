
const toggleButton = document.querySelector('.toggle-button');
const headerNav = document.querySelector('.header_nav');

toggleButton.addEventListener('click', () => {
    console.log('Clicked');
    headerNav.classList.toggle('active')
})