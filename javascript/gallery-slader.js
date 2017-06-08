$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    
    smartSpeed:300, //Время движения слайда
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})