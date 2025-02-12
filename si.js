let abierto = false;
let imageIndex = 0;
const images = [
    'abrazo.gif',
    'love.gif',
    'love-exited.gif',
    'comer-amor.gif'
];

function changeImage() {
    const imagen = document.querySelector('#fotos');
    
    imagen.classList.add('fade');
    
    setTimeout(() => {
        imageIndex = (imageIndex + 1) % images.length;
        imagen.src = 'images/' + images[imageIndex];
        
        setTimeout(() => {
            imagen.classList.remove('fade');
        }, 50);
    }, 500);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); 
}

function mostrarMensaje() {
    const mensajeEmergente = document.getElementById('mensaje-emergente');
    const overlay = document.getElementById('overlay');
    mensajeEmergente.style.display = 'block';
    overlay.style.display = 'block';
}

function cerrarMensaje() {
    const mensajeEmergente = document.getElementById('mensaje-emergente');
    const overlay = document.getElementById('overlay');
    mensajeEmergente.style.display = 'none';
    overlay.style.display = 'none';
}

setInterval(createHeart, 300);
setInterval(changeImage, 3500);