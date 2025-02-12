let noDivMuchasVeces = false;

function no() {
    const button_yes = document.getElementById('button_yes');
    const currentWidth = button_yes.offsetWidth;
    const currentHeight = button_yes.offsetHeight;
    
    if(!noDivMuchasVeces && contador < 7){
        button_yes.style.width = currentWidth * 1.2 + 'px';
        button_yes.style.height = currentHeight * 1.2 + 'px';
    }
}

let contador = 1;
document.addEventListener("DOMContentLoaded", () => {
    const button_no = document.querySelector("#button_no");
    button_no.addEventListener("click", () => {
        if(!noDivMuchasVeces) {contador++;}
        noMuchasVeces(contador);
    });
});


let mensajeIndex = 0;
const mensajes = [
    '¿Por que le das tantas veces?😢¿No me quieres?😭😭',
    '¿No quieres?😢',
    'AMOOOOOR😭😭',
    '¿Por que me haces esto?😭😢',
];
function noMuchasVeces(contador) {
    const divMuchasVeces = document.getElementById("mensaje-container");
    const p = document.getElementById("mensaje");
    if(contador >= 7){
        mensajeIndex = (mensajeIndex + 1) % mensajes.length;
        p.innerText = mensajes[mensajeIndex];
        divMuchasVeces.style.display = "block";
        noDivMuchasVeces = true;
    }
}

function yes() {
    if(!noDivMuchasVeces){
        window.location.href = 'si.html';
    }
}

let imageIndex = 0;
const images = [
    'beso.gif',
    'orejitas-amor.gif',
    'movil-amor.gif',
    'corazon-saliendo.gif'
];

function changeImage() {
    const imagen = document.querySelector('img');
    
    imagen.classList.add('fade');
    
    setTimeout(() => {
        imageIndex = (imageIndex + 1) % images.length;
        imagen.src = 'images/' + images[imageIndex];
        
        setTimeout(() => {
            imagen.classList.remove('fade');
        }, 50);
    }, 500);
}

function cerrar (){
    const divMuchasVeces = document.getElementById("mensaje-container");
    divMuchasVeces.style.display = "none";
    noDivMuchasVeces = false;
}

setInterval(changeImage, 3500);