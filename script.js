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
    var typed = new Typed(".typing", {
        strings: ["Front-End", "Back-End", "Fullstack"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
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

$(function() {
    $(".br").click(function() {
        // Navbar
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-br")
        // Menu
        $(".menu li:nth-child(1) a").text("Início")
        $(".menu li:nth-child(2) a").text("Sobre")
        $(".menu li:nth-child(3) a").text("Tecnologias")
        $(".menu li:nth-child(4) a").text("Projetos")
        $(".menu li:nth-child(5) a").text("Contato")
        
        
        // Home
        $(".text-1").text("Olá, meu nome é")
        // $(".text-3").text("Eu sou Desenvolvedor Web")
        // $(".text-3 span").addClass("typing")
        $(".home-content a").text("Contratar-me")


        // Sobre
        $(".about .max-width .title").text("Sobre")
        // $(".about .title").after("Quem sou eu")
        $(".about .about-content .right .text").text("Sou Felipe e sou")
        // $(".about .about-content .right .text").children().text("Desenvolvedor Web")


        // Tecnologias
        $(".technologies .title").text("Ferramentas")


        // Projetos
        $(".projects .title").text("Meus Prjetos")
        $(".projects .carousel .box:nth-child(1) p").text("")

    })
})


$(function() {
    $(".en").click(function() {
        $(".language-selected").text("en-US")
        $(".language-selected").removeClass("change-br")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").addClass("change-en")
        $(".menu li:nth-child(1) a").text("Home")
        $(".menu li:nth-child(2) a").text("About me")
        $(".menu li:nth-child(3) a").text("Stacks")
        $(".menu li:nth-child(4) a").text("Projects")
        $(".menu li:nth-child(5) a").text("Contact")

        $(".text-1").text("Hello, my name is")
        // $(".text-3").children().text("I am a Web Developer")
        // $(".text-3 span").addClass("typing")
        $(".home-content a").text("Hire me")


        $(".about .max-width .title").text("About")
        // $(".about .title").after("Who I am")
        $(".about .about-content .right .text").text("I'm Felipe and I am")
        // $(".about .about-content .right .text").children().eq(0).text("a Web Developer")


        $(".technologies .title").text("Stacks")


        $(".projects .title").text("My Projects")
        $(".projects .carousel .box:nth-child(1) p").text("Application developed for a burger restaurant where users can register and login to place an order using a shopping cart.")
    })
})

$(function() {
    $(".es").click(function() {
        $(".language-selected").text("es-ES")
        $(".language-selected").removeClass("change-br")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-es")

        $(".menu li:nth-child(1) a").text("Inicio")
        $(".menu li:nth-child(2) a").text("Sobre")
        $(".menu li:nth-child(3) a").text("Tecnologías")
        $(".menu li:nth-child(4) a").text("Proyectos")
        $(".menu li:nth-child(5) a").text("Contacto")

        $(".text-1").text("Hola, mi nombre es")
        // $(".text-3").text("Yo soy Desarrollador Web")
        // $(".text-3 span").addClass("typing")
        $(".home-content a").text("Contratarme")

        $(".about .max-width .title").text("Sobre")
        // $(".about .title").attr("Quién soy yo")
        $(".about .about-content .right .text").text("Yo soy Felipe y Yo soy")
        // $(".about .about-content .right .text span").text("Desarrollador Web")


        $(".technologies .title").text("Pilas de Tecnologías")


        $(".projects .title").text("Mis Proyectos")
    })
})