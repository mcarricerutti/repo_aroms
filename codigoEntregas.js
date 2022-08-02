//TERCERA ENTREGA: INCLUYENDO ARRAYS.

//Saludo INICIAL
//Le pedimos al usuario que ingrese su nombre
let usuario=prompt("Ingresa tu nombre");
function bienvenida() {
    //Mostramos por pantalla el saludo
    alert("¡Te damos la bienvenida a -AROMS-, "+ usuario + "!");
}
bienvenida()



//PRESENTAMOS PRODUCTOS.
//Clases, objetos, métodos...

//Estructura
class Vela{
    constructor(tamano,precio,aroma,recipiente){
        this.tamano=tamano;
        this.precio=precio;
        this.aroma=aroma.toUpperCase();
        this.recipiente=recipiente;
    }
}
 
//Creamos nuevos objetos.
const vela1= new Vela("6,5cm","$800","Lavanda","En caramelera");
const vela2= new Vela("6,5cm","$700","Limón","En vasito simple");
const vela3= new Vela("6,5cm","$700","Coco","Con formas");
const vela4= new Vela("8cm","$1000","Vainilla","En caramelera");
const vela5= new Vela("8cm","$920","Jazmín","En vasito simple");
const vela6= new Vela("8cm","$900","Canela","Con formas");
const vela7= new Vela("10cm","$1500","Coco","En caramelera");
const vela8= new Vela("10cm","$1400","Limón","En vasito simple");
const vela9= new Vela("10cm","$1300","Vainilla","Con formas");


//Mostramos los productos por pantalla
alert("Los productos disponibles son: "+
"\n"+
"\n"+ "Vela 1: "+"Tamaño: "+vela1.tamano+"- "+"Precio: "+vela1.precio+"- "+"Aroma: "+vela1.aroma+"- "+"Recipiente: "+vela1.recipiente+
"\n"+"Vela 2 "+"Tamaño: "+vela2.tamano+"- "+"Precio: "+vela2.precio+"- "+"Aroma: "+vela2.aroma+"- "+"Recipiente: "+vela2.recipiente+
"\n"+"Vela 3 "+"Tamaño: "+vela3.tamano+"- "+"Precio: "+vela3.precio+"- "+"Aroma: "+vela3.aroma+"- "+"Recipiente: "+vela3.recipiente+
"\n"+"Vela 4 "+"Tamaño: "+vela4.tamano+"- "+"Precio: "+vela4.precio+"- "+"Aroma: "+vela4.aroma+"- "+"Recipiente: "+vela4.recipiente+
"\n"+"Vela 5 "+"Tamaño: "+vela5.tamano+"- "+"Precio: "+vela5.precio+"- "+"Aroma: "+vela5.aroma+"- "+"Recipiente: "+vela5.recipiente+
"\n"+"Vela 6 "+"Tamaño: "+vela6.tamano+"- "+"Precio: "+vela6.precio+"- "+"Aroma: "+vela6.aroma+"- "+"Recipiente: "+vela6.recipiente+
"\n"+"Vela 7 "+"Tamaño: "+vela7.tamano+"- "+"Precio: "+vela7.precio+"- "+"Aroma: "+vela7.aroma+"- "+"Recipiente: "+vela7.recipiente+
"\n"+"Vela 8 "+"Tamaño: "+vela8.tamano+"- "+"Precio: "+vela8.precio+"- "+"Aroma: "+vela8.aroma+"- "+"Recipiente: "+vela8.recipiente+
"\n"+"Vela 9 "+"Tamaño: "+vela9.tamano+"- "+"Precio: "+vela9.precio+"- "+"Aroma: "+vela9.aroma+"- "+"Recipiente: "+vela9.recipiente);



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



//ARRAYS
//Declaramos el primer array
const aromasVelas=["Lavanda","Canela","Vainilla","Coco","Limón","Jazmín"]
console.table(aromasVelas);

//Agregamos nuevos elementos al final de la lista
aromasVelas.push("Menta");
aromasVelas.push("Chocolate");
//Agregamos nuevos elementos al principio de la lista
aromasVelas.unshift("Sandía");
aromasVelas.unshift("Pepino");
aromasVelas.unshift("Cítricos");
console.log(aromasVelas);

aromasVelas.splice(5,3);
console.log(aromasVelas);

let aString= aromasVelas.join("\n");
console.log(aString);

const tamanoVela=["Grande","Mediano","Chico"];
const recipienteVela=["Caramelera","Vasito simple","Con formas"];
const precioVela=["$700","$800","$900","$920","$1000","$1300","$1400","$1500"];


const tamanoYrecipiente = (("Tamaños: "+tamanoVela+"\n").concat("Recipientes: "+recipienteVela+"\n"));
const aromaYprecio = (("Aromas: "+aromasVelas+"\n").concat("Precios: "+precioVela));
const velas = tamanoYrecipiente.concat(aromaYprecio);
console.log(velas);



const velasPromo=[
    {
        forma: "Corazón",
        tamano: "Mediano",
        precio: "$845",
    },
    {
        forma: "Letra",
        tamano: "Chico",
        precio: "$650",
    },
    {
        forma: "Pirámide",
        tamano: "Mediano",
        precio: "$860",
    },
    {
        forma: "Flor",
        tamano: "Grande",
        precio: "$1050",
    },
    {
        forma: "Luna",
        tamano: "Chico",
        precio: "$645",
    },
]
console.table(velasPromo);


let pregunta=prompt("¿Quieres saber las promos de hoy? Escribe SI o NO."+"\n"+"-Respeta mayúsculas-");
for(const vela of velasPromo){
    if(pregunta == "SI"){
        let presentacion= ("Promos de HOY: "+"\n"+vela.forma+"\n"+vela.tamano+"\n"+vela.precio);
        alert(presentacion);
    }else{
        alert("Hasta pronto "+usuario);
        break;
    }
}

