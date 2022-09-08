//EVENTOS DE TECLADO

let campoNombre=document.getElementById("nombres");
let campoApellido=document.getElementById("apellido");
let campoCalle=document.getElementById("calle");
let campoNumero=document.getElementById("numero");
let campoCodPostal=document.getElementById("codPostal");
let campoProvincia=document.getElementById("provincia");
let campoLocalidad=document.getElementById("localidad");
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


let formularioCompra=document.getElementById("formuCompra");
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


//PROBLEMA 1
//Aquí quiero que los datos ingresados por el usuario lleguen hasta aca, para luego simular que los cargos en una API----

//POST
function enviarDatos() {
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";
    const objetoPost = {
            "userId": campoNombre.value,
            "id": campoApellido.value,
            "title": campoCalle.value,
            "body": campoNumero
        }
    fetch(URLPOST, {
            method: "POST",
            body: JSON.stringify(objetoPost),
            headers: { "Content-type": "application/json; charset=utf-8",}
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            //Lo que retorna el servidor
            console.log("DATA QUE RETORNA JSONPLACEHOLDER A POST");
            console.log(datos)
        })
}

enviarDatos();

