//Creamos un array para declarar todos los prodcutos.
const Productos=[
    {
        id:1,
        aroma:`Vela de Limón`,
        tamano:`10cm`,
        precio: 1000,
        imagen: `img/limon.jpg`,
    },
    {
        id:2,
        aroma:`Vela de Lavanda`,
        tamano:`12cm`,
        precio: 1200,
        imagen: `img/lavanda.jpeg`,
    },
    {
        id:3,
        aroma:`Vela de Vainilla`,
        tamano:`12cm`,
        precio: 1200,
        imagen: `img/vainilla.jpg`,
    },
    {
        id:4,
        aroma:`Vela de Canela`,
        tamano:`10cm`,
        precio: 1000,
        imagen: `img/canela.jpg`,
    },
    {
        id:5,
        aroma:`Vela de Jazmín`,
        tamano:`12cm`,
        precio: 1200,
        imagen: `img/jazmin.jpg`,
    },
    {
        id:6,
        aroma:`Vela de Coco`,
        tamano:`12cm`,
        precio: 1200,
        imagen: `img/coco.jpg`,
    },
    {
        id:7,
        aroma:`Set Corazones`,
        tamano:`8cm`,
        precio: 1500,
        imagen: `img/corazones.jpg`,
    },
    {
        id:8,
        aroma:`Set Cubos y Caracolas`,
        tamano:`8cm`,
        precio: 1800,
        imagen: `img/carolas.jpg`,
    },
    {
        id:9,
        aroma:`Set Lunas`,
        tamano:`8cm`,
        precio: 1650,
        imagen: `img/caras.jpg`,
    },
]


//Declaramos array carrito,para utilizarlo luego
let Carrito = [];
//Llamamos elementos del html(en este caso todos son id)
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


//Funciones

//Dibujamos todos los productos
function presentarProductos() {
    Productos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.aroma;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `$ ${info.precio}`;
        //Tamano
        const miNodoTamano = document.createElement(`tamano`);
        miNodoTamano.classList.add(`card-text`);
        miNodoTamano.textContent = `${info.tamano}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.style.marginLeft=`10%`
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos todo el codigo creado anteriormente a la etiqueta padre
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoTamano);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });

    /**
     * Evento para añadir un producto al carrito de compra
     */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        Carrito.push(evento.target.getAttribute('marcador'))
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
        const miItem = Productos.filter((itemProducto) => {
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
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].aroma} - ${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
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
        const miItem = Productos.filter((itemProducto) => {
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

// Inicio
presentarProductos();
presentarCarrito();













// const tamanos = ['6,5cm', '8cm', '10cm'];
// let select = document.createElement("select");
// for (let index = 0; index < tamanos.length; index++) {
//     select.innerHTML +=  `<option value='${index}'>${tamanos[index]}</option>`;
// }
// document.body.tamano.appendChild(select);