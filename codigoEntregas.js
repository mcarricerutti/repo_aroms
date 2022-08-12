class Producto{
    constructor(id,aroma,tamano,precio,foto){
        this.id=id;
        this.aroma=aroma;
        this.tamano=tamano;
        this.precio=precio;
        this.foto=foto;
    }
}

class ElementoCarrito{
    constructor(producto, cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
}

//Arrays para guardar los datos de producto y elementos del carrito

const productos=[];
const elementosCarrito=[];

const contenedorCarritoCompras = document.querySelector("#items")


//Ejecutamos funciones.

cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();


//Definimos funciones
function cargarProductos(){
    productos.push(new Producto(1,"Vela de Limón","6,5cm",950,"img/limon.jpg"));
    productos.push(new Producto(2,"Vela de Lavanda","8cm",1100,"img/lavanda.jpg"));
    productos.push(new Producto(3,"Vela de Vainilla","10cm",1300,"img/vainilla.jpg"));
    productos.push(new Producto(4,"Vela de Coco","6,5cm",950,"img/coco.jpg"));
    productos.push(new Producto(5,"Vela de Jazmín","8cm",1100,"img/jazmin.jpg"));
    productos.push(new Producto(6,"Vela de Canela","10cm",1300,"img/canela.jpg"));
    productos.push(new Producto(7,"Set Corazones","6,5cm",990,"img/corazones.jpg"));
    productos.push(new Producto(8,"Set Cubo y Caracola","8cm",1100,"img/caracolas.jpg"));
    productos.push(new Producto(9,"Set Lunas","10cm",1300,"img/caras.jpg"));
}

function cargarCarrito(){
    let elementoCarrito = new ElementoCarrito(
        new Producto(new Producto(1,"Vela de Limón","6,5cm",950,".../img/limon.jpg"), 1
    ));

    elementosCarrito.push(elementoCarrito);
}

function dibujarCarrito(){
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.aroma}</td>
                    <td>${elemento.producto.tamano}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;
}

function crearCard(producto) {
    //Botón
    let botonAgregar = document.getElementById("buttonCarrito");
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.getElementById("card-content");
    cuerpoCarta.append(botonAgregar);

    //Card
    let carta = document.getElementById("cardCarrito");
    carta.append(cuerpoCarta);

    //Agregar algunos eventos
    botonAgregar.onclick = () => {
        //alert("Hiciste click en el producto" + producto.nombre);

        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementosCarrito.push(elementoCarrito);

        dibujarCarrito();

    } 
    
    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}



// const tamanos = ['6,5cm', '8cm', '10cm'];
// let select = document.createElement("select");
// for (let index = 0; index < tamanos.length; index++) {
//     select.innerHTML +=  `<option value='${index}'>${tamanos[index]}</option>`;
// }
// document.body.tamano.appendChild(select);