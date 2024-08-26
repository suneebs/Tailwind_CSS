const menuIcon =document.querySelector('#menuIcon');
const menuItems =document.querySelector('#menuItems');

menuIcon.addEventListener('click',() => {
    if(menuItems.classList.contains('hidden'))
        menuItems.classList.remove('hidden');
    else
        menuItems.classList.add('hidden');
})