//---------------- CARTELES DE CONFIRMACION---------------//
function EXITO(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    // Usar SweetAlert2 para mostrar el mensaje
    Swal.fire({
        title: '¡Muchas gracias!',
        text: 'Te has inscrito exitosamente en nuestro boletín.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}
function EXITO2(event) {
    event.preventDefault()
    Swal.fire({
        title: '¡Muchas gracias!',
        text: '¡Gracias por inscribirte en nuestra carrera! ¡Pronto recibirás un correo electrónico de confirmación!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', () =>{
menu.classList.add('mostrar');
closeMenu.style.display = 'inline-flex';
openMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () =>{
menu.classList.remove('mostrar');
closeMenu.style.display = 'none';
openMenu.style.display = 'inline-flex';
});
//PARA LA FLECHA QUE LLEVA PARA ARRIBA
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//////////////////////EFECTO PARALLAX///////////////////
