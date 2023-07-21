$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });
    new Typed(".typing", {
        strings: ["Front-End", "Back-End", "Fullstack"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");        
    });
    $('.menu li').click(function(){
        $('.navbar .menu').toggleClass("active");
    })
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            1000:{
                items:2,
                nav:false
            },
            2025:{
                items:3,
                nav:false
            }
        }
    });
})

$(document).ready(function() {
    $(".br").click(function() {
        // Navbar
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-br")
        
    })
})


$(document).ready(function() {
    $(".en").click(function() {
        $(".language-selected").text("en-US")
        $(".language-selected").removeClass("change-br")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").addClass("change-en")



    })
})

