let aNombre = [];
let aEdad = [];

let elementoBtnRegistar = document.querySelector(".btnRegistrar");

elementoBtnRegistar.addEventListener(`click`, registrarUsuarioNuevo);

function registrarUsuarioNuevo(){
    let nombre=document.querySelector(".inputNombre").value;
    let edad=document.querySelector(".inputEdad").value;

    aNombre.push(nombre);
    aEdad.push(edad);

    localStorage.setItem(`nombre-usuario`,JSON.stringify(aNombre));
    localStorage.setItem(`edad-usuario`,JSON.stringify(aEdad));
}