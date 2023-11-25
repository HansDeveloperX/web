
//capturar eventos de form y escuchar boton submit
document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();

    //obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // valdar datos
    if(username && password){
        // mostrar elementos en la consola
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);

    }else{
        alert('Porfavor introduce un nombre de usuario y contrasena');
    }
});