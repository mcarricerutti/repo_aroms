//EVENTOS DE TECLADO

let campoNombre=document.getElementById("nombreIn");
let campoApellido=document.getElementById("apellidoIn");
let campoCalle=document.getElementById("calleIn");
let campoNumero=document.getElementById("numeroIn");
let campoPiso=document.getElementById("pisoIn");
let campoDpto=document.getElementById("dptoIn");
let campoCodPostal=document.getElementById("codPostalIn");
let campoProvincia=document.getElementById("provinciaIn");
let campoLocalidad=document.getElementById("localidadIn");
let campoNombreContacto=document.getElementById("nombreContacto");
let campoDNI=document.getElementById("dni");
let campoEmail=document.getElementById("mail");


campoNombre.oninput=()=>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black";
    }else{
        campoNombre.style.color="red";
    }
}

campoApellido.oninput=()=>{
    if(isNaN(campoApellido.value)){
        campoApellido.style.color="black";
    }else{
        campoApellido.style.color="red";
    }
}

campoCalle.oninput=()=>{
    if(isNaN(campoCalle.value)){
        campoCalle.style.color="black";
    }else{
        campoCalle.style.color="red";
    }
}

campoProvincia.oninput=()=>{
    if(isNaN(campoProvincia.value)){
        campoProvincia.style.color="black";
    }else{
        campoProvincia.style.color="red";
    }
}

campoLocalidad.oninput=()=>{
    if(isNaN(campoLocalidad.value)){
        campoLocalidad.style.color="black";
    }else{
        campoLocalidad.style.color="red";
    }
}

campoNombreContacto.oninput=()=>{
    if(isNaN(campoNombreContacto.value)){
        campoNombreContacto.style.color="black";
    }else{
        campoNombreContacto.style.color="red";
    }
}

//Validamos los datos ingresados por el usuario
let formularioCompra=document.getElementById("datosFormulario");

formularioCompra.addEventListener("submit",validarFormCompra);
function validarFormCompra(ev){
    if((campoNombre.value=="")||(campoApellido.value=="")||(campoCalle.value=="")||(campoNumero.value=="")||(campoCodPostal.value=="")||(campoProvincia.value=="")||(campoLocalidad.value=="")||(campoNombreContacto.value=="")||(campoDNI.value=="")||(campoEmail.value=="")){
        ev.preventDefault();//Evita que se envie el form y que se vacien los campos
        Toastify({
            text: " - Complete todos los datos con * - ",
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




