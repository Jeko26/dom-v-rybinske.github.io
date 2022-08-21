let burger = document.querySelector('.burger');
let links = document.querySelector('.header__group--burger');
burger.addEventListener('click', function () {
	links.classList.toggle('burger--open');
	burger.classList.toggle('burger--cross');
});

var swiper = new Swiper(".swiper__container", {
    cssMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    mousewheel: true,
    keyboard: true,
  });


  var i=0;
  var image=document.getElementById("image");
  // Добавьте свои картинки в массив через запятую
  var imgs=new Array('image/red.png');
  function imgsrc() {
      i++;i%=imgs.length;
      image.src = imgs[i];
  }
