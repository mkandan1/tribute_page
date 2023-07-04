
const toggleButton = document.querySelector('.toggle-button');
const headerNav = document.querySelector('.header_nav');

toggleButton.addEventListener('click', () => {
    console.log('Clicked');
    headerNav.classList.toggle('active')
})

function redirect(){
    console.log('Working?');
    window.location.href = 'https://www.britannica.com/biography/Sundar-Pichai';
}