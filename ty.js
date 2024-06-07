



const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');


$next.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide1').appendChild(items[0]);
  },
);

$prev.addEventListener(
  'click',
  () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide1').prepend(items[items.length - 1]);
  },
);





window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});




// const menuToggle = document.querySelector('.menu-toggle input');
// const navbar = document.querySelector('navbar ul');
//  menuToggle.addEventListener('click', function(){

//   navbar.classList.toggle('slide');
//  });

const menuToggle = document.querySelector('.menu-toggle input');
menuToggle.addEventListener('click', function(){
  const navbar = document.querySelector('.navbar ul');
  navbar.classList.toggle('slide');
});