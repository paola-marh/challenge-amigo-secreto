// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; 
    if(nombre == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombre);
        console.log(nombre);
        limpiar();    
    }
}
// Limpiar campo de entrada 
function limpiar() {
    document.getElementById("amigo").value = ("");
}
//
function sortearAmigo() {
    let NumeroDeAmigos = amigos.length;
     console.log(NumeroDeAmigos);
    let aleatorio = Math.floor(Math.random()*NumeroDeAmigos);
    console.log(aleatorio);
    console.log(amigos [aleatorio]);
}

