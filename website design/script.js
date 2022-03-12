let menu = document.querySelector(".fa-bars-staggered");
let links = document.querySelector(".nav-links");

menu.onclick = () =>{
     links.classList.toggle("active")
     menu.classList.toggle("fa-times")
}
links.onclick = () =>{
     links.classList.remove("active")
     menu.classList.remove("fa-times")
}

// header slider
$(document).ready(function () {
     $('.slider').slick({
          autoplay: true,
          dots: true,
          infinite: true,
          speed: 400,
          // fade: true,
          cssEase: 'linear',
          dots: false,
          arrows: false
     });
});
     
// clients slider
$('.clients-slider').slick({
     slidesToShow: 6,
     slidesToScroll: 4,
     autoplay: true,
     autoplaySpeed: 2000,
     dots: false,
     arrows: false,
     responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
   });

// view more services

let moreServices = document.querySelector('.more-services');
let moreServicesBtn = document.querySelector('.view-more-services-btn');

moreServicesBtn.onclick = () => {
    moreServices.classList.toggle('active')
}