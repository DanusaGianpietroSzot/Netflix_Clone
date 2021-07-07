$('.carousel').slick({
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 600,
    

    responsive: [
        {
          breakpoint: 600, // aqui define até que largura será as configs abaixo
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          
          }
        },
        {
            breakpoint: 410, // aqui define até que largura será as configs abaixo
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ]
});

const btn_close = document.querySelector(".btn-close");
const btn_menu = document.querySelector(".btn-menu");


btn_menu.addEventListener("click", function(){
  document.querySelector(".modal-menu").style.display="flex";
  btn_menu.style.display="none";
});

btn_close.addEventListener("click", function(){
  document.querySelector(".modal-menu").style.display="none";
  btn_menu.style.display="flex";
})

  