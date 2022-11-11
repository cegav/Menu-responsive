
const toggleMenuElement = document.getElementById('toggle-menu'); 
const headerMenuElement = document.getElementById('header-menu');


toggleMenuElement.addEventListener('click', () => {
    headerMenuElement.classList.toggle('menu--show');
    toggleMenuElement.classList.toggle('toggle--show');
});