<!--    WHOW WE ARE JS-->
$('.second').click(function(){
    // alert('sadf');
    $('.img-bg').css('background','url("images/havenrc_content/2-WhoWeAre/2.jpg") no-repeat center center');
    $('.img-bg').css('background-size','cover');
    $('.img-bg').removeClass('hidden');
    // $('.img-bg').css('width','');
})
$('.first').click(function(){
    // alert('sadf');
    $('.img-bg').css('background','url("images/havenrc_content/2-WhoWeAre/1.jpg") no-repeat center center');
    // $('.img-bg').css('background-size','cover');
    $('.img-bg').removeClass('hidden');
    // $('.img-bg').css('width','');
})


// <!--    Investors JS-->
$('.second-invest').click(function(){
    // alert('sadf');
    $('.img-bg1').css('background','url("images/havenrc_content/3-InvestmentStrategy/2.jpg") no-repeat center center');
    $('.img-bg1').css('background-size','cover');
    // $('.img-bg').css('width','');
})
$('.first-invest').click(function(){
    // alert('sadf');
    $('.img-bg1').css('background','url("images/havenrc_content/3-InvestmentStrategy/1.jpg") no-repeat center center');
    $('.img-bg1').css('background-size','cover');
    // $('.img-bg').css('width','');
})
$('.third-invest').click(function(){
    // alert('sadf');
    $('.img-bg1').css('background','url("images/havenrc_content/3-InvestmentStrategy/3.jpg") no-repeat center center');
    $('.img-bg1').css('background-size','cover');
    // $('.img-bg').css('width','');
})



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



//Team Model JS img 1
const showModel = document.querySelector('.show-model');
const removeHidden = document.querySelector('.remove-hidden');
const cancelModel = document.querySelector('.close');
showModel.addEventListener('click', function () {
    removeHidden.classList.remove('hidden');
});

cancelModel.addEventListener('click', function (){
    removeHidden.classList.add('hidden');
});
//Team Model JS img 2
const showModel2 = document.querySelector('.show-model-2');
const removeHidden2 = document.querySelector('.remove-hidden-2');
const cancelModel2 = document.querySelector('.close-2');
showModel2.addEventListener('click', function () {
    removeHidden2.classList.remove('hidden');
});

cancelModel2.addEventListener('click', function (){
    removeHidden2.classList.add('hidden');
});
//Team Model JS img 3
const showModel3 = document.querySelector('.show-model-3');
const removeHidden3 = document.querySelector('.remove-hidden-3');
const cancelModel3 = document.querySelector('.close-3');
showModel3.addEventListener('click', function () {
    removeHidden3.classList.remove('hidden');
});

cancelModel3.addEventListener('click', function (){
    removeHidden3.classList.add('hidden');
});
//Team Model JS img 4
const showModel4 = document.querySelector('.show-model-4');
const removeHidden4 = document.querySelector('.remove-hidden-4');
const cancelModel4 = document.querySelector('.close-4');
showModel4.addEventListener('click', function () {
    removeHidden4.classList.remove('hidden');
});

cancelModel4.addEventListener('click', function (){
    removeHidden4.classList.add('hidden');
});

//Team Model JS img 5
const showModel5 = document.querySelector('.show-model-5');
const removeHidden5 = document.querySelector('.remove-hidden-5');
const cancelModel5 = document.querySelector('.close-5');
showModel5.addEventListener('click', function () {
    removeHidden5.classList.remove('hidden');
});

cancelModel5.addEventListener('click', function (){
    removeHidden5.classList.add('hidden');
});

//Team Model JS img 6
const showModel6 = document.querySelector('.show-model-6');
const removeHidden6 = document.querySelector('.remove-hidden-6');
const cancelModel6 = document.querySelector('.close-6');
showModel6.addEventListener('click', function () {
    removeHidden6.classList.remove('hidden');
});

cancelModel6.addEventListener('click', function (){
    removeHidden6.classList.add('hidden');
});


// counter observer
let forObs = document.querySelectorAll('.forObs');
const counterSection = document.querySelector('.observer-counter');

const obsCallBack = function (entries,observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;

    // Animated Counter
    const counter = document.querySelectorAll('.counter-plus');
    const speed = 200;
    counter.forEach(e => {
        const updateCount = () => {
            const target = +e.getAttribute('data-target');
            const count = +e.innerText;
            const inc = target / speed;
            if (count < target){
                e.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10)
            }else{
                count.innerText = target;
            }
        }
        updateCount();
    });
    observer.unobserve(entry.target);
}

const obsOptions = {
    root: null,
    threshold: 0.3
}

const CounterObserver = new IntersectionObserver(obsCallBack,obsOptions);
CounterObserver.observe(counterSection);





