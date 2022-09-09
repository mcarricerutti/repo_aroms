//Creamos una variable global para almacenas los datos de productos.json
let productosJSON = [];

//Traemos los datos de productos.json
async function obtenerJSON() {
    const URLJSON="productos.json"
    //Traemos toda la info
    const resp=await fetch(URLJSON)
    //Guardamos la info ya pasada a objeto
    const data= await resp.json()
    //Y a esa info la guardamos en una variable global
    productosJSON = data;

    //Presentamos los productos
    presentarProductos();
}

//Llamamos la función
obtenerJSON();

//Declaramos array carrito,para utilizarlo luego
let Carrito =[];

let lista



//Llamamos elementos del html(en este caso todos son id)
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('.total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


//Evento-Cuando la ventana está cargada
window.onload=()=>{
    lista=document.getElementById("items");
    //selector y evento change
    document.getElementById("miSeleccion").setAttribute("option", "pordefecto");
    document.getElementById("miSeleccion").onchange=()=>ordenar();
};


//Funciones

//Dibujamos todos los productos
function presentarProductos() {
productosJSON.forEach((info) => {
    // Estructura
    const miNodo = document.createElement('div');
    miNodo.classList.add('card', 'col-sm-4');
    // Body
    const miNodoCardBody = document.createElement('div');
    miNodoCardBody.classList.add('card-body');
    // Titulo
    const miNodoTitle = document.createElement('h5');
    miNodoTitle.classList.add('card-title');
    miNodoTitle.style.color = `#7C86C5`;
    miNodoTitle.style.fontSize = `22px`;
    miNodoTitle.style.padding = `5%`;
    miNodoTitle.style.fontWeight = `bold`;
    miNodoTitle.textContent = info.aroma;
    // Imagen
    const miNodoImagen = document.createElement('img');
    miNodoImagen.classList.add('img-fluid');
    miNodoImagen.setAttribute('src', info.imagen);
    // Precio
    const miNodoPrecio = document.createElement('p');
    miNodoPrecio.classList.add('card-text');
    miNodoPrecio.style.color = `#7A7D8F `;
    miNodoPrecio.style.backgroundColor = `#D3D7EC`;
    miNodoPrecio.style.marginLeft = `10%`;
    miNodoPrecio.style.marginRight = `20%`;
    miNodoPrecio.textContent = `$ ${info.precio}`;
    //Tamano
    const miNodoTamano = document.createElement(`tamano`);
    miNodoTamano.classList.add(`card-text`);
    miNodoTamano.style.fontSize = `18px`;
    miNodoTamano.textContent = `${info.tamano}`;
    // Boton 
    const miNodoBoton = document.createElement('button');
    miNodoBoton.style.marginLeft = `10%`;
    miNodoBoton.style.backgroundColor = `#A7ADD1`;
    miNodoBoton.style.border = `none`;
    miNodoBoton.classList.add('btn');
    miNodoBoton.textContent = '+';
    miNodoBoton.setAttribute('marcador', info.id);
    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

    //Disponibilidad
    const miNodoDispo = document.createElement(`disponible`);
    miNodoDispo.classList.add(`card-text`);
    miNodoDispo.style.fontSize = `15px`;
    miNodoDispo.style.display = `flex`;
    miNodoDispo.style.paddingTop = `4%`;
    miNodoDispo.textContent = `\n Compra máx. ${info.stockMax}u`;


    // Insertamos todo el codigo creado anteriormente a la etiqueta padre
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoTamano);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodoCardBody.appendChild(miNodoDispo);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);

});


/**
 * Evento para añadir un producto al carrito de compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    Carrito.push(evento.target.getAttribute('marcador'))

    Toastify({
        text: "Producto seleccionado añadido!",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "pink",
        }
    }).showToast();

    // Actualizamos el carrito 
    presentarCarrito();
}
}

/**
* Dibujamos todos los productos guardados en el carrito
*/
function presentarCarrito() {
// Vaciamos todo el html
DOMcarrito.textContent = '';
// Quitamos los duplicados
const carritoSinDuplicados = [...new Set(Carrito)];
// Generamos los Nodos a partir de carrito
carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable Producto
    const miItem = productosJSON.filter((itemProducto) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemProducto.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = Carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo
        return itemId === item ? total += 1 : total;
    }, 0);


    // Creamos el nodo del item del carrito
    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].aroma} - $ ${miItem[0].precio}`;
    // Boton de borrar
    const miBoton = document.createElement('button');
    miBoton.classList.add(`btn`, 'mx-5');
    miBoton.textContent = '🗑';
    miBoton.style.backgroundColor = `#B7757B `;
    miBoton.style.border = `#E82216`
    miBoton.style.marginLeft = '1rem';
    miBoton.dataset.item = item;
    miBoton.addEventListener('click', borrarItemCarrito);

    // Mezclamos nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
});
// Renderizamos el precio total en el HTML
DOMtotal.textContent = `$` + calcularTotal();
}




/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
// Obtenemos el producto ID que hay en el boton pulsado
const id = evento.target.dataset.item;
// Borramos todos los productos
Carrito = Carrito.filter((carritoId) => {
    return carritoId !== id;
});

Swal.fire({
    text: 'Deseas eliminar el producto?',
    icon: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
            'Eliminado!',
            'Su producto ha sido eliminado.',
            'success'
        )
    }
})

// volvemos a renderizar
presentarCarrito();
}


/**
* Calcula el precio total teniendo en cuenta los productos repetidos
*/
function calcularTotal() {
// Recorremos el array del carrito 
return Carrito.reduce((total, item) => {
    // De cada elemento obtenemos su precio
    const miItem = productosJSON.filter((itemProducto) => {
        return itemProducto.id === parseInt(item);
    });
    // Los sumamos al total
    return total + miItem[0].precio;
}, 0).toFixed(2);
}


/**
* Vacía el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
// Limpiamos los productos guardados
Carrito = [];
// Renderizamos los cambios
presentarCarrito();
}
// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

function ordenar() {
    let seleccion = document.getElementById("miSeleccion").value;
    console.log(seleccion)
    if (seleccion == "menor") {
        productosJSON.sort(function(a, b) {
            return a.precio - b.precio
        });
    } else if (seleccion == "mayor") {
        productosJSON.sort(function(a, b) {
            return b.precio - a.precio
        });
    }
    lista.innerHTML="";
    presentarProductos();
}




// Inicio
presentarProductos();
presentarCarrito();