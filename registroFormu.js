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

//EVENTOS DE TECLADO
let campoNombre=document.getElementById("nombre");
let campoEdad=document.getElementById("edad");

//Si el valor no es un numero lo muestra en negro, si no en rojo
campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black";
    }else{
        campoNombre.style.color="red";
    }
}

//EVENTO SUBMIT
let formulario=document.getElementById("formularioPrin");
formulario.addEventListener("submit",validarForm);

//En los parentesis se puede poner: e, ev, event
function validarForm(ev){
    if((campoNombre.value=="")||(campoEdad.value=="")){
        ev.preventDefault();//Evita que se envie el form y que se vacien los campos
        Toastify({
            text: " -Ingrese nombre/edad- ",
            duration: 3000,
            gravity: "center",
            position: "center",
            style: {
                background: "white",
                color: "red",
            }
        }).showToast();
    }
}


