//1er ENTREGA DEL PROYECTO FINAL.

//Saludo INICIAL
//Le pedimos al usuario que ingrese su nombre
let usuario = prompt("Ingresa tu nombre");

function bienvenida() {
    //Mostramos por pantalla el saludo
    alert("¡Te damos la bienvenida a -AROMS-, " + usuario + "!");
}
bienvenida()


//Mostramos por pantalla el aviso del descuento, y llamamos una variable global
let aviso = alert("¡Para suerte tuya " + usuario + ", hoy tenemos 30% de descuento en todos los productos de la tienda!")

class Producto{
    constructor(numero,tamano,precio,aroma,recipiente,disponibilidad){
        this.numero=numero;
        this.tamano=tamano;
        this.precio=parseInt(precio);
        this.aroma=aroma;
        this.recipiente=recipiente;
        this.disponibilidad=disponibilidad;
    }
    habilitar(){
        let error = "libro disponible"
        if(this.disponibilidad == false){
            this.disponibilidad = true
        }else{
            console.log(error);
        }
    }
    deshabilitar(){
        let error = "Libro NO disponible"
        if(this.disponibilidad == true){
            this.disponibilidad = false
        }else{
            console.log(error)
        }
    }
}


//Array de objetos
//Todas las velas...

const Velas=[
    {
        numero: "Vela 1",
        tamano: "6,5cm",
        precio: 800,
        aroma: "Lavanda",
        recipiente: "En caramelera",
        disponibilidad: true,
    },
    {
        numero: "Vela 2",
        tamano: "6,5cm",
        precio: 700,
        aroma: "Limón",
        recipiente: "En vasito simple",
        disponibilidad: true,
    },
    {
        numero: "Vela 3",
        tamano: "6,5cm",
        precio: 700,
        aroma: "Coco",
        recipiente: "Con forma",
        disponibilidad: true,
    },
    {
        numero: "Vela 4",
        tamano: "8cm",
        precio: 1000,
        aroma: "Vainilla",
        recipiente: "En caramelera",
        disponibilidad: true,
    },
    {
        numero: "Vela 5",
        tamano: "8cm",
        precio: 920,
        aroma: "Jazmín",
        recipiente: "En vasito simple",
        disponibilidad: true,
    },
    {
        numero: "Vela 6",
        tamano: "8cm",
        precio: 900,
        aroma: "Canela",
        recipiente: "Con forma",
        disponibilidad: true,
    },
    {
        numero: "Vela 7",
        tamano: "10cm",
        precio: 1500,
        aroma: "Coco",
        recipiente: "En caramelera",
        disponibilidad: true,
    },
    {
        numero: "Vela 8",
        tamano: "10cm",
        precio: 1400,
        aroma: "Limón",
        recipiente: "En vasito simple",
        disponibilidad: true,
    },
    {
        numero: "Vela 9",
        tamano: "10cm",
        precio: 1300,
        aroma: "Vainilla",
        recipiente: "Con forma",
        disponibilidad: true,
    },
]


//Con forEach, retornamos los numeros de las velas.
Velas.forEach(vela => console.log(vela.numero));

//Filtramos las velas disponibles
const velasDispo=Velas.filter(vela=>vela.disponibilidad == true);
console.table(velasDispo);


//Estructura de las velas en promo

class promo {
    constructor(forma, tamano, precio) {
        this.forma = forma,
            this.tamano = tamano,
            this.precio = parseInt(precio)
    }
}

//Creamos nuevos objetos

let promo1 = new promo("Corazón", "Mediano", 845);
let promo2 = new promo("Letra", "Chico", 650);
let promo3 = new promo("Pirámide", "Mediano", 860);
let promo4 = new promo("Flor", "Grande", 1050);
let promo5 = new promo("Luna", "Chico", 645);

//Creamos el array donde guardaremos los datos de las promos.
const promos = [];

//Pusheamos todos los datos.
promos.push(promo1, promo2, promo3, promo4, promo5);


//Y por último mediante un for of mostramos las promos del día por pantalla
let pregunta = prompt("¿Quieres ver las promos del día? SI o NO." + "\n" + "-Respeta mayúsculas-");

for (const velas of promos) {
    if (pregunta == "SI") {
        let presentacion = ("Promos de HOY: " + "\n" + velas.forma + "\n" + velas.tamano + "\n" +"$"+ velas.precio);
        alert(presentacion);
    } else if (pregunta == "NO") {
        alert("¡Gracias por visitar nuestra página " + usuario + "!");
        //Usamos un break para que finalice
        break;
    }
}

//Creamos el array de carrito.
const Carrito = []

//Preguntamos si desea comprar
//Si dice si muestra los productos, luego agrega productos, unidades y por ultimo muestra el total con descuento incluido.
//Si dice no finaliza ahí mismo.

let comprar = prompt("¿Desea hacer una compra? (SI o NO)");

while (comprar != "S") {
    if (comprar == "SI" || comprar == "Si" || comprar == "si") {
        alert("A continuación mostramos nuestras velas!")
        for(const vela of Velas){
        alert(catalogo = ("Velas del catálogo:  "+ vela.numero +"\n"+"\n"+ "Tamaño: " +vela.tamano +"\n"+"Precio: $"+ vela.precio +"\n"+"Aroma: "+ vela.aroma +"\n"+"Recipiente: "+ vela.recipiente));
        }
    } else if (comprar == "no" || comprar == "No" || comprar == "NO") {
        alert("¡Gracias por visitar nuestra página!")
        break
    }
    break;
}

while(comprar == "SI"){
let producto = prompt("Agrega un producto a tu carrito (ej: vela 1, promo 4)");
let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
let precio = 0

while (producto != "S") {
    if (producto == "vela 1" || producto == "vela 2" || producto == "vela 3" || producto == "vela 4" || producto == "vela 5" || producto == "vela 6" || producto == "vela 7" || producto == "vela 8" || producto == "vela 9" || producto == "promo 1" || producto == "promo 2" || producto == "promo 3" || producto == "promo 4" || producto == "promo5") {

        switch (producto) {
            case "vela 1":
                precio = 800;
                break;
            case "vela 2":
                precio = 700;
                break;
            case "vela 3":
                precio = 700;
                break;
            case "vela 4":
                precio = 1000;
                break;
            case "vela 5":
                precio = 920;
                break;
            case "vela 6":
                precio = 900;
                break;
            case "vela 7":
                precio = 1500;
                break;
            case "vela 8":
                precio = 1400;
                break;
            case "vela 9":
                precio = 130;
                break;
            case "promo 1":
                precio = 845;
                break;
            case "promo 2":
                precio = 650;
                break;
            case "promo 3":
                precio = 860;
                break;
            case "promo 4":
                precio = 1050;
                break;
            case "promo 5":
                precio = 645;
                break;
            default:
                alert("No tenemos ese producto")
                break;
        }
    }else{
        alert("No tenemos ese producto")
        producto = prompt("Agrega un producto a tu carrito (ej: vela 1, promo 4)");
        unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
    }

    let finalizar = prompt("Ya terminaste tu compra?, Si o No")
    if(finalizar == "Si"|| finalizar == "SI"|| finalizar == "si"){
        alert("Muchas gracias por tu compra!")
        break;
    }else if(finalizar == "No"||finalizar == "NO"||finalizar == "no"){
        producto = prompt("Agrega un producto a tu carrito");
        unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
    }
}



Carrito.push({
    producto,
    unidades,
    precio
})
console.log(Carrito)



let total = Carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(total)

//DESCUENTO

function apliDesc(total) {
    //Aplico 30% de descuento al precio
    return (total * 30) / 100;
}
//Variable que guada el resultado del descuento
let valorDesc = apliDesc(total);

//Obtengo precio final mediante resta
let precioFinal = total - valorDesc;
console.log(precioFinal)


alert(`El total a pagar por su compra con descuento incluido es: $ ${precioFinal}`);

const hoy = new Date();
alert("Fecha de la compra: " + hoy.toLocaleString() )

break;
}







//ARRAYS
//Declaramos el primer array
const aromasVelas = ["Lavanda", "Canela", "Vainilla", "Coco", "Limón", "Jazmín"]
console.table(aromasVelas);

//Agregamos nuevos elementos al final de la lista
aromasVelas.push("Menta");
aromasVelas.push("Chocolate");

//Agregamos nuevos elementos al principio de la lista
aromasVelas.unshift("Sandía");
aromasVelas.unshift("Pepino");
aromasVelas.unshift("Cítricos");
console.log(aromasVelas);

//Borramos algunos aromas, el 5, 6 y 7
aromasVelas.splice(5, 3);
console.log(aromasVelas);

//Pasamos de array a string
let aString = aromasVelas.join("\n");
console.log(aString);

//Creamos nuevos arrays
const tamanoVela = ["Grande", "Mediano", "Chico"];
const recipienteVela = ["Caramelera", "Vasito simple", "Con formas"];
const precioVela = ["$700", "$800", "$900", "$920", "$1000", "$1300", "$1400", "$1500"];

//Aquí concatenamos los nuevos arrays
const tamanoYrecipiente = (("Tamaños: " + tamanoVela + "\n").concat("Recipientes: " + recipienteVela + "\n"));
const aromaYprecio = (("Aromas: " + aromasVelas + "\n").concat("Precios: " + precioVela));
const velas = tamanoYrecipiente.concat(aromaYprecio);
//Mostramos por consola todos los arrays concatenados
console.log(velas);

