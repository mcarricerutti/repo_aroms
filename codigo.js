// //Código JS, desafio COMPLEMENTARIO.

// //Solicitamos un nombre
// let usuario= prompt("Ingresa tu nombre");
// //Montramos por pantalla un mensaje de bienvenida, más el nombre ingresado
// alert("¡Bienvenida a -AROMS- " + usuario + "!");



// //Solicitamos edad del usuario
// let edad = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa su edad
//    edad = prompt("Ingresar tu edad, y dale ENTER para salir.");
//    console.log(edad);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(edad));


// //Le solicitamos al usuario que ingrese cierto número para mostrar por pantalla el mensaje que tiene el mismo
// let entrada =  prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-S- para salir!)");
// //Hasta que la entrada sea distinto a "S" el ciclo va a seguir funcionando.
// while(entrada != "S"){
//     switch (entrada) {
//         case "1":
//             alert("PRECIOS:" +"\n"+ "-Chicas: $800 y $700" +"\n"+ "-Medianas: $1000, $920 y $900" + "\n" + "-Grandes: $1500, $1400 y $1300")
//             break;
//         case "2":
//             alert("MODELOS:" +"\n"+ "-Caramelera." +"\n"+ "-Vasito Simple." +"\n"+ "-Formas.");
//             break;
//         case "3":
//             alert("AROMAS: "+"\n"+ "-Vainilla."+"\n"+ "-Jazmín."+"\n"+ "-Coco."+"\n"+ "-Canela."+"\n"+ "-Limón."+"\n"+"-Lavanda.");
//             break;
//         default:
//             alert("VACÍO")
//             break;
//     }entrada = prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-S- para salir!).");
// }



//Código DESAFÍO ENTREGABLE.

//Saludo INICIAL
//Le pedimos al usuario que ingrese su nombre
let usuario=prompt("Ingresa tu nombre");
function bienvenida() {
    //Mostramos por pantalla el saludo
    alert("¡Te damos la bienvenida a -AROMS-, "+ usuario + "!");
}
bienvenida()

//Presentación PRODUCTOS
//Le solicitamos al usuario que ingrese cierto número para mostrar por pantalla el mensaje que tiene el mismo
let entrada =  prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-S- para salir!)");
//Hasta que la entrada sea distinto a "S" el ciclo va a seguir funcionando.
while(entrada != "S"){
    switch (entrada) {
        case "1":
            alert("PRECIOS:" +"\n"+ "-Chicas: $800 y $700" +"\n"+ "-Medianas: $1000, $920 y $900" + "\n" + "-Grandes: $1500, $1400 y $1300")
            break;
        case "2":
            alert("MODELOS:" +"\n"+ "-Caramelera." +"\n"+ "-Vasito Simple." +"\n"+ "-Formas.");
            break;
        case "3":
            alert("AROMAS: "+"\n"+ "-Vainilla."+"\n"+ "-Jazmín."+"\n"+ "-Coco."+"\n"+ "-Canela."+"\n"+ "-Limón."+"\n"+"-Lavanda.");
            break;
        default:
            alert("VACÍO")
            break;
    }entrada = prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-S- para salir!).");
}


//DESCUENTO
//Mostramos por pantalla el aviso del descuento, y llamamos una variable global
let aviso = alert("¡Para suerte tuya "+ usuario +", hoy tenemos 30% de descuento en todos los productos de la tienda!")
//Solicitamos que ingrese el precio 
let precio= parseInt(prompt("Ingresa el costo de tu vela elegida, y te diremos en cuanto queda!"));

function apliDesc(precio){
    //Aplico 30% de descuento al precio
    return (precio * 30)/100;
}
//Variable que guada el resultado del descuento
let valorDesc = apliDesc(precio);

//Obtengo precio final mediante resta
let precioFinal = precio - valorDesc;



//PRECIO + IVA
//Declaramos variables (de suma y resta) anónimas con función flecha.
const suma = (a,b) => a + b
const resta = (a,b) => a-b

//Calculamos el precio con iva
const iva = precio => precio * 0.21;
let precioOriginal = precio;
let precioDesc = valorDesc;
//Cálculo el precioOriginal + IVA - Descuento.
let precioConIva = resta(suma(precioOriginal,iva(precioOriginal)),precioDesc);
//Mostramos por pantalla el resultado
alert("El precio con descuento + IVA seria de: $"+ precioConIva);