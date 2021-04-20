
var nombre;

// funcion para recibir el nombre del logeo
var recibir  = () => {
    window.location.href="./juego.html";
    nombre = document.getElementById('nombre');
    alert('Welcome ' + nombre.value );
}
