
// <!--    Navbar JS-->
const openNav = document.querySelector('#open-nav');
const navBar = document.querySelector('#navbar');
const closeNav = document.querySelector('#cancel_nav');
const showSubMenu = document.querySelector('#show-sub-menu');
const removeHiddenSubMenu = document.querySelector('#sub_menu_hidden');

openNav.addEventListener('click', function () {
    navBar.classList.remove('d-none');
});

closeNav.addEventListener('click',function () {
    navBar.classList.add('d-none');

});
showSubMenu.addEventListener('click', function (e){
    e.preventDefault();
    removeHiddenSubMenu.classList.toggle('hidden');
});



/*start nav link smooth scrolling*/
document.querySelectorAll('.nav_link').forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
        navBar.classList.add('d-none');
    })
});

/*ENd nav link smooth scrolling*/







