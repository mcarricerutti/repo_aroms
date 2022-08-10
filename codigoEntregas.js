//1er ENTREGA DEL PROYECTO FINAL.


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
        let error = "Vela disponible"
        if(this.disponibilidad == false){
            this.disponibilidad = true
        }else{
            console.log(error);
        }
    }
    deshabilitar(){
        let error = "Vela NO disponible"
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

while(comprar == "SI"|| comprar == "Si" || comprar == "si"){
let producto = prompt("Agrega un producto a tu carrito (ej: vela 1)");
let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
let precio = 0

while (producto != "S") {
    if (producto == "vela 1" || producto == "vela 2" || producto == "vela 3" || producto == "vela 4" || producto == "vela 5" || producto == "vela 6" || producto == "vela 7" || producto == "vela 8" || producto == "vela 9") {

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
            default:
                alert("No tenemos ese producto")
                break;
        }
    }else{
        alert("No tenemos ese producto")
        producto = prompt("Agrega un producto a tu carrito (ej: vela 1)");
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


//CARDS 

let cartas = document.getElementById("cartas");
for(const Vela of Velas) {
    let carta = document.createElement("div");
    carta.className = "card col-md-4";
    carta.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${Vela.numero}</h5>
            <p class="card-text">${Vela.tamano}</p>
            <p class="card-text">${Vela.precio}</p>
            <p class="card-text">${Vela.aroma}</p>
            <p class="card-text">${Vela.recipiente}</p>
            <button class="btn btn-primary">Comprar
            </button>
        </div>
    `;
    cartas.append(carta);
}
