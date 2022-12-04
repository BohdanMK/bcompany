$(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPosit = $(window).scrollTop();

    let nav = $("#navigation");
    let burger = $("#burger");

    /*burger*/
    burger.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("active");
        burger.toggleClass("active");

    })

    checkScroll(scrollPosit, introH);

    $(window).on("scroll resize", function(){
        let introH = intro.innerHeight();
        let scrollPosit =$(this).scrollTop();

        checkScroll(scrollPosit, introH);
    });

    /*функція перевірка */

    function checkScroll(scrollPosit, introH) {
        if (scrollPosit > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*smoosh scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop:elementOffset - 94
        }, 700);

        nav.removeClass("active");
        burger.removeClass("active");
    })

    /*slider*/
    let slider = $("#sliderBox");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 850
      });

});