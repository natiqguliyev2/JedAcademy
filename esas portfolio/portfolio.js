//   testimonal strat
var left = document.getElementById("btnleft");
var rifght = document.getElementById("btnright");
var picture = document.getElementById("picture");
var i = 0;
var link1 = "IMG_20210928_154418.jpg"
var link2 = "IMG_20210928_154418.jpg"
var link3 = "IMG_20210928_153608.jpg"

var images = [link1, link2, link3];

left.addEventListener("click", previous);
function previous() {
    if (i == 0) {
        i = images.length - 1;
        picture.src = images[i];
    } else {
        i--;
        picture.src = images[i];
    }
}
rifght.addEventListener("click", next);
function next() {
    if (i == images.length - 1) {
        i = 0;
        picture.src = images[i];
    } else {
        i++;
        picture.src = images[i];
    }
}
        // testimional end

                   //  MY ARTICLES.
                   
                //    var swiper = new Swiper(".mySwiper", {
                //      slidesPerView: 3,
                //      spaceBetween: 30,
                //      pagination: {
                //        el: ".swiper-pagination",
                //        clickable: true,
                //      },
                //    });             



                // var swiper = new Swiper(".mySwipet", {
                //     effect: "coverflow",
                //     grabCursor: true,
                //     centeredSlides: true,
                //     slidesPerView: "auto",
                //     coverflowEffect: {
                //       rotate: 50,
                //       stretch: 0,
                //       depth: 100,
                //       modifier: 1,
                //       slideShadows: true,
                //     },
                //     pagination: {
                //       el: ".swiper-pagination",
                //     },
                //   });