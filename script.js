// =============================
// MENU MOBILE
// =============================


const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");


menuMobile.addEventListener("click", () => {

    if(menu.style.display === "flex"){

        menu.style.display = "none";

    }else{

        menu.style.display = "flex";

    }

});





// Fechar menu ao clicar em algum link

const linksMenu = document.querySelectorAll(".menu a");


linksMenu.forEach(link => {


    link.addEventListener("click", () => {


        if(window.innerWidth <= 900){

            menu.style.display = "none";

        }


    });


});









// =============================
// FAQ INTERATIVO
// =============================


const perguntas = document.querySelectorAll(".pergunta");


perguntas.forEach(pergunta => {


    const titulo = pergunta.querySelector("h3");
    const resposta = pergunta.querySelector("p");


    resposta.style.display = "none";


    titulo.style.cursor = "pointer";


    titulo.addEventListener("click", () => {


        if(resposta.style.display === "none"){


            resposta.style.display = "block";


        }else{


            resposta.style.display = "none";


        }


    });


});









// =============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =============================


const elementos = document.querySelectorAll(
    ".card, .beneficios div, .sobre img, .pergunta"
);



function aparecer(){

    elementos.forEach(elemento => {


        let posicao = elemento.getBoundingClientRect().top;


        let alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){


            elemento.style.opacity = "1";

            elemento.style.transform = "translateY(0)";


        }


    });


}



elementos.forEach(elemento => {


    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(40px)";

    elemento.style.transition = "0.6s";


});



window.addEventListener("scroll", aparecer);


aparecer();









// =============================
// ANO AUTOMÁTICO NO RODAPÉ
// =============================


const ano = new Date().getFullYear();


const rodape = document.querySelector("footer p");


if(rodape){

    rodape.innerHTML =
    `© ${ano} AgroScan | Todos os direitos reservados`;

}