var Swipwer = new Swipwer(".mySwiper-1",{
    slidesperview:1,
    spacebetween:30,
    loop:true,
    pagination : {
        el:".Swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".Swiper-button-next",
        prevEl:".Swiper-button-prev",
    }

});

var Swiperwipwer = new Swipwer(".mySwiper-2",{
    slidesperview:3,
    spacebetween:20,
    loop:true,
    loopFillGroupWithBlank : true,
     navigation:{
        nextEl:".Swiper-button-next",
        prevEl:".Swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesperview:1,
        },
        520: {
            slidesperview:2,
        },
        950: {
            slidesperview:3,
        }

    }

});

let tapInputs = document.querySelectorAll("tabInput");

tapInputs.forEach(function(input){

    input.addEventListener('change',function() {
        let id =input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper'+ id);
        thisSwiper.Swiper.update();

    })



});