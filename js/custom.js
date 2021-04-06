
// <!--    Navbar JS-->
const openNav = document.querySelector('#open-nav');
const navBar = document.querySelector('#navbar');
const closeNav = document.querySelector('#cancel_nav');
const showSubMenu = document.querySelector('#show-sub-menu');
const arrow = document.querySelector('.down-arrow');
const removeHiddenSubMenu = document.querySelector('#sub_menu_hidden');

openNav.addEventListener('click', function () {
    navBar.classList.remove('d-none');
    openNav.classList.add('d-none');
});

closeNav.addEventListener('click',function () {
    navBar.classList.add('d-none');
    openNav.classList.remove('d-none');

});
showSubMenu.addEventListener('click', function (e){
    e.preventDefault();
    removeHiddenSubMenu.classList.toggle('hidden');
    arrow.classList.toggle('d-none');
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

let aboutUs = sessionStorage.getItem('aboutus');
let news = sessionStorage.getItem('news');
let singleFamily = sessionStorage.getItem('singleFamily');
let returnToInvestment = sessionStorage.getItem('return_to_investment');
if (aboutUs == "true"){
    document.querySelector('#section--1').scrollIntoView({
        behavior: "smooth"
    });
    navBar.classList.add('d-none');
    sessionStorage.clear();
}

if (news == "true"){
    document.querySelector('#section--4').scrollIntoView({
        behavior: "smooth"
    });
    navBar.classList.add('d-none');
    sessionStorage.clear();
}

if (singleFamily == "true"){
    document.querySelector('#section--3').scrollIntoView({
        behavior: "smooth"
    });
    navBar.classList.add('d-none');
    sessionStorage.clear();
}

if (returnToInvestment == "true"){
    document.querySelector('#section--3').scrollIntoView({
        behavior: "smooth"
    });
    navBar.classList.add('d-none');
    sessionStorage.clear();
}
/*ENd nav link smooth scrolling*/







