gsap.from('.navbar', {opacity:0, duration:1, delay:1, y:10})
gsap.from('.mainImage', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.words', {opacity:0, duration:1, delay:1.6, y:30, stagger:0.2})
gsap.from('.wordsbuttons', {opacity:0, duration:1, delay:1.8, y:30, stagger:0.2})
gsap.from('.headingpagetwo', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.pagetwoimage1', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.pagetwoimage2', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.headingpagethree', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.pagethreeimageone', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.pagethreetext', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.pagethreeimagetwo', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.signup', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.login', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.mainheading', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('form', {opacity:0, duration:1, delay:2.1, y:30, stagger:0.2})
gsap.from('.pagefivewords', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})
gsap.from('.bottomimage', {opacity:0, duration:1, delay:1.3, y:30, stagger:0.2})




//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//makes page reload on scrolling
AOS.init();











