function login(event) {
    event.preventDefault();
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('contrasenia').value;

    if (username == '' || password == '') {
        alert('El usuario y la contraseña son requeridos');
    } else {
        window.location.href = 'home.html';
    }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

});