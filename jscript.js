window.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  const fixedSidebar = document.getElementById('fixed-sidebar');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= navbar.offsetTop) {
      fixedSidebar.classList.add('sticky');
    } else {
      fixedSidebar.classList.remove('sticky');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  $(slider).slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});