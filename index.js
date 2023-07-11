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

$(document).ready(function() {
    $(".br").click(function() {
        // Navbar
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-br")
        // // Menu
        // $(".menu li:nth-child(1) a").text("Início")
        // $(".menu li:nth-child(2) a").text("Sobre")
        // $(".menu li:nth-child(3) a").text("Tecnologias")
        // $(".menu li:nth-child(4) a").text("Projetos")
        // $(".menu li:nth-child(5) a").text("Contato")
        
        
        // // Home
        // $(".text-1").text("Olá, meu nome é")
        // $(".text-3").text("Eu sou Desenvolvedor Web")
        // // $(".text-3 span").addClass("typing")
        // $(".home-content a").text("Contratar-me")


        // // Sobre
        // $(".about .title").text("Sobre")
        // $('.about .title').hover(function(){
        //     $(this).attr('data-content','Quem sou eu');
        // });
        // // $(".about .title").after("Quem sou eu")
        // $(".about .about-content .right .text").text("Sou Felipe e sou")
        // // $(".about .about-content .right .text").children().text("Desenvolvedor Web")
        // $(".about .about-content .right p").text("Sou um brasileiro apaixonado por animes, mangás e cultura japonesa. Também adoro RPG e jogos eletrônicos aos quais tenho enorme interesse em game design e como são criados. Acredito que a tecnologia seja uma ferramenta excencial na vida das pessoas e que veio para melhorar as suas vidas.")


        // // Tecnologias
        // $(".technologies .title").text("Ferramentas")
        // $('.technologies .title').hover(function(){
        //     $(this).attr('data-content','Que eu domino');
        // });


        // // Projetos
        // $(".projects .title").text("Meus Prjetos")
        // $('.projects .title').hover(function(){
        //     $(this).attr('data-content','Realizados');
        // });
        // $(".projects .carousel .box:nth-child(1) p").text("")


        // // Contatos
        // $(".contact .title").text("Contato")
        // $('.contact .title').hover(function(){
        //     $(this).attr('data-content','Fale comigo');
        // });

    })
})


$(document).ready(function() {
    $(".en").click(function() {
        $(".language-selected").text("en-US")
        $(".language-selected").removeClass("change-br")
        $(".language-selected").removeClass("change-es")
        $(".language-selected").addClass("change-en")

        // $(".menu li:nth-child(1) a").text("Home")
        // $(".menu li:nth-child(2) a").text("About me")
        // $(".menu li:nth-child(3) a").text("Stacks")
        // $(".menu li:nth-child(4) a").text("Projects")
        // $(".menu li:nth-child(5) a").text("Contact")

        // $(".text-1").text("Hello, my name is")
        // $(".text-3").text("I am a Web Developer")
        // // $(".text-3 span").text("Fullstack")
        // // $(".text-3 .typing").text("Fullstack")
        // $(".home-content a").text("Hire me")


        // $(".about .title").text("About")
        // $('.about .title').hover(function(){
        //     $(this).attr('data-content','Who I am');
        // });
        
        // $(".about .about-content .right .text").text("I'm Felipe and I am")
        // // $(".about .about-content .right .text").children().eq(0).text("a Web Developer")
        // $(".about .about-content .right p").text("I'm a Brazilian passionate about anime, manga, and Japanese culture. I also love RPGs and video games, and I have a great interest in game design and how they are created. I believe that technology is an essential tool in people's lives and that it has come to improve their lives.")


        // $(".technologies .title").text("Stacks")
        // $('.technologies .title').hover(function(){
        //     $(this).attr('data-content','That I know');
        // });


        // $(".projects .title").text("My Projects")
        // $('.projects .title').hover(function(){
        //     $(this).attr('data-content','Done');
        // });
        // $(".projects .carousel:nth-child(1) .box p").text("Application developed for a burger restaurant where users can register and login to place an order using a shopping cart.")
        // $(".projects .carousel:nth-child(2) .box p").text("Project to assist people who wish to make donations of personal belongings they no longer use. Upon registration, the user can either donate an item or obtain an item that has been listed for donation.")

        // $(".contact .title").text("Contact")
        // $('.contact .title').hover(function(){
        //     $(this).attr('data-content','Message me');
        // });
        // $(".contact .left .head:nth-child(1)").text("Name")
        // $(".contact .left .head:nth-child(2)").text("Address")
    })
})

// $(document).ready(function() {
//     $(".es").click(function() {
//         $(".language-selected").text("es-ES")
//         $(".language-selected").removeClass("change-br")
//         $(".language-selected").removeClass("change-en")
//         $(".language-selected").addClass("change-es")

//         // $(".menu li:nth-child(1) a").text("Inicio")
//         // $(".menu li:nth-child(2) a").text("Sobre")
//         // $(".menu li:nth-child(3) a").text("Tecnologías")
//         // $(".menu li:nth-child(4) a").text("Proyectos")
//         // $(".menu li:nth-child(5) a").text("Contacto")

//         // $(".text-1").text("Hola, mi nombre es")
//         // $(".text-3").text("Yo soy Desarrollador Web")
//         // $(".text-3 span").addClass("typing")
//         // $(".home-content a").text("Contratarme")

//         // $(".about .title").text("Sobre")
//         // $('.about .title').hover(function(){
//         //     $(this).attr('data-content','Quién soy yo');
//         // });
//         // // $(".about .title").attr("Quién soy yo")
//         // $(".about .about-content .right .text").text("Yo soy Felipe y Yo soy")
//         // // $(".about .about-content .right .text span").text("Desarrollador Web")
//         // $(".about .about-content .right p").text("Soy un brasileño apasionado por los animes, mangas y la cultura japonesa. También adoro los RPG y los videojuegos, y tengo un enorme interés en el diseño de juegos y cómo se crean. Creo que la tecnología es una herramienta esencial en la vida de las personas y que ha venido para mejorar sus vidas.")


//         // $(".technologies .title").text("Pilas de Tecnologías")
//         // $('.technologies .title').hover(function(){
//         //     $(this).attr('data-content','Que domino');
//         // });

//         // $(".projects .title").text("Mis Proyectos")
//         // $('.projects .title').hover(function(){
//         //     $(this).attr('data-content','Realizados');
//         // });
//         // $(".projects .carousel .box:nth-child(1) p").text("Aplicación desarrollada para una hamburguesería en la que es necesario que el usuario se registre e inicie sesión para luego realizar un pedido a través de un carrito de compras.")
//         // $(".projects .carousel .box:nth-child(2) p").text("Proyecto para ayudar a las personas que deseen realizar donaciones de bienes personales que ya no utilizan. Al registrarse, el usuario puede tanto donar un artículo como obtener un artículo que se haya puesto para donar.")

//         // $(".contact .title").text("Contacto")
//         // $('.contact .title').hover(function(){
//         //     $(this).attr('data-content','Contáctame');
//         // });
//         // $(".contact .left .head:nth-child(1)").text("Nombre")
//         // $(".contact .left .head:nth-child(2)").text("Address")
//     })
// })