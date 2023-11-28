$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:20,
        responsiveClass:true,
        responsive:{
            1024:{items:3},
            768:{items:2},
            576:{items:1},
            425:{items:1},
            320:{items:1},
            0:{items:1}
            
        }
    });
  });