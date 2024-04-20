const itemNav = document.querySelectorAll('.item-nav');
function activeLink(){
    itemNav.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
itemNav.forEach((item) => 
    item.addEventListener('click', activeLink));