// //Código JS, desafio COMPLEMENTARIO.

// //Solicitamos un nombre
// let usuario= prompt("Ingresa tu nombre");
// //Montramos por pantalla un mensaje de bienvenida, más el nombre ingresado
// alert("¡Bienvenida a -AROMS- " + usuario + "!");

// //Saludo INICIAL
// //Le pedimos al usuario que ingrese su nombre
// let usuario = prompt("Ingresa tu nombre");

// function bienvenida() {
//     //Mostramos por pantalla el saludo
//     alert("¡Te damos la bienvenida a -AROMS-, " + usuario + "!");
// }
// bienvenida()


//Mostramos por pantalla el aviso del descuento, y llamamos una variable global
// let aviso = alert("¡Para suerte tuya " + usuario + ", hoy tenemos 30% de descuento en todos los productos de la tienda!")


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



// //Código DESAFÍO ENTREGABLE.

// //Saludo INICIAL
// //Le pedimos al usuario que ingrese su nombre
// let usuario=prompt("Ingresa tu nombre");
// function bienvenida() {
//     //Mostramos por pantalla el saludo
//     alert("¡Te damos la bienvenida a -AROMS-, "+ usuario + "!");
// }
// bienvenida()

// //Presentación PRODUCTOS
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


// //DESCUENTO
// //Mostramos por pantalla el aviso del descuento, y llamamos una variable global
// let aviso = alert("¡Para suerte tuya "+ usuario +", hoy tenemos 30% de descuento en todos los productos de la tienda!")
// //Solicitamos que ingrese el precio 
// let precio= parseInt(prompt("Ingresa el costo de tu vela elegida, y te diremos en cuanto queda!"));

// function apliDesc(precio){
//     //Aplico 30% de descuento al precio
//     return (precio * 30)/100;
// }
// //Variable que guada el resultado del descuento
// let valorDesc = apliDesc(precio);

// //Obtengo precio final mediante resta
// let precioFinal = precio - valorDesc;



// //PRECIO + IVA
// //Declaramos variables (de suma y resta) anónimas con función flecha.
// const suma = (a,b) => a + b
// const resta = (a,b) => a-b

// //Calculamos el precio con iva
// const iva = precio => precio * 0.21;
// let precioOriginal = precio;
// let precioDesc = valorDesc;
// //Cálculo el precioOriginal + IVA - Descuento.
// let precioConIva = resta(suma(precioOriginal,iva(precioOriginal)),precioDesc);
// //Mostramos por pantalla el resultado
// alert("El precio con descuento + IVA seria de: $"+ precioConIva);


// //Clases, objetos, métodos...

// class Vela{
//     constructor(tamano,precio,aroma,recipiente){
//         this.tamano=tamano;
//         this.precio=precio;
//         this.aroma=aroma.toUpperCase();
//         this.recipiente=recipiente;
//     }
// }

// const vela1= new Vela("6,5cm","$800","Lavanda","En caramelera");
// const vela2= new Vela("6,5cm","$700","Limón","En vasito simple");
// const vela3= new Vela("6,5cm","$700","Coco","Con formas");
// const vela4= new Vela("8cm","$1000","Vainilla","En caramelera");
// const vela5= new Vela("8cm","$920","Jazmín","En vasito simple");
// const vela6= new Vela("8cm","$900","Canela","Con formas");
// const vela7= new Vela("10cm","$1500","Coco","En caramelera");
// const vela8= new Vela("10cm","$1400","Limón","En vasito simple");
// const vela9= new Vela("10cm","$1300","Vainilla","Con formas");



// alert("Los productos disponibles son: "+
// "\n"+
// "\n"+ "Vela 1: "+"Tamaño: "+vela1.tamano+"- "+"Precio: "+vela1.precio+"- "+"Aroma: "+vela1.aroma+"- "+"Recipiente: "+vela1.recipiente+
// "\n"+"Vela 2 "+"Tamaño: "+vela2.tamano+"- "+"Precio: "+vela2.precio+"- "+"Aroma: "+vela2.aroma+"- "+"Recipiente: "+vela2.recipiente+
// "\n"+"Vela 3 "+"Tamaño: "+vela3.tamano+"- "+"Precio: "+vela3.precio+"- "+"Aroma: "+vela3.aroma+"- "+"Recipiente: "+vela3.recipiente+
// "\n"+"Vela 4 "+"Tamaño: "+vela4.tamano+"- "+"Precio: "+vela4.precio+"- "+"Aroma: "+vela4.aroma+"- "+"Recipiente: "+vela4.recipiente+
// "\n"+"Vela 5 "+"Tamaño: "+vela5.tamano+"- "+"Precio: "+vela5.precio+"- "+"Aroma: "+vela5.aroma+"- "+"Recipiente: "+vela5.recipiente+
// "\n"+"Vela 6 "+"Tamaño: "+vela6.tamano+"- "+"Precio: "+vela6.precio+"- "+"Aroma: "+vela6.aroma+"- "+"Recipiente: "+vela6.recipiente+
// "\n"+"Vela 7 "+"Tamaño: "+vela7.tamano+"- "+"Precio: "+vela7.precio+"- "+"Aroma: "+vela7.aroma+"- "+"Recipiente: "+vela7.recipiente+
// "\n"+"Vela 8 "+"Tamaño: "+vela8.tamano+"- "+"Precio: "+vela8.precio+"- "+"Aroma: "+vela8.aroma+"- "+"Recipiente: "+vela8.recipiente+
// "\n"+"Vela 9 "+"Tamaño: "+vela9.tamano+"- "+"Precio: "+vela9.precio+"- "+"Aroma: "+vela9.aroma+"- "+"Recipiente: "+vela9.recipiente);




// //Otra prueba

// //objeto
// const vela1 = {
//     aroma: "Vainilla",
//     precio: "$1300",
//     tamano: "Grande",
//     recipiente: "Vasito simple"
// }
// console.log(vela1.aroma);
// console.log(vela1["precio"]);

// vela1["precio"] = "$1200"
// console.log(vela1["precio"])


// //objeto constructor

// function vela(literal){
//     this.aroma = literal.aroma;
//     this.precio = literal.precio;
//     this.tamano = literal.tamano;
//     this.recipiente = literal.recipiente;
// }

// const velaNueva1= new vela({aroma:"Lavanda",precio:"$1500",tamaño:"10cm",recipiente:"Caramelera"});
// const velaNueva2= new vela({aroma:"Limón",precio:"$700",tamaño:"6,5cm",recipiente:"Con Forma"});
// const velaNueva3= new vela({aroma:"Canela",precio:"$900",tamaño:"8cm",recipiente:"Vasito simple"});

// console.log(velaNueva1)
// console.log(velaNueva2)
// console.log(velaNueva3)

// class Producto{
//     constructor(aroma,precio,tamano){
//         this.aroma=aroma.toUpperCase();
//         this.precio=precio;
//         this.tamano=tamano;
//     }
//     presentarAroma(){
//         alert("El aroma elegido es "+ this.aroma);
//     }
// }

// const producto1= new Producto("Canela","$1400","Grande");
// producto1.presentarAroma();

// let pregunta = prompt("Si es tu aroma elegido escribe S, y si no lo es N.") 
// if(pregunta == "S"){
//     console.log("Es correcto");
// }else{
//     console.log("Es incorrecto");
// }



//TERCERA ENTREGA...(INCLUYENDO ARRAYS)

// //ARRAYS

// //Declaramos el primer array
// const aromasVelas=["Lavanda","Canela","Vainilla","Coco","Limón","Jazmín"]
// console.table(aromasVelas);

// //Agregamos nuevos elementos al final de la lista
// aromasVelas.push("Menta");
// aromasVelas.push("Chocolate");
// //Agregamos nuevos elementos al principio de la lista
// aromasVelas.unshift("Sandía");
// aromasVelas.unshift("Pepino");
// aromasVelas.unshift("Cítricos");
// console.log(aromasVelas);

// aromasVelas.splice(5,3);
// console.log(aromasVelas);

// let aString= aromasVelas.join("\n");
// console.log(aString);

// const tamanoVela=["Grande","Mediano","Chico"];
// const recipienteVela=["Caramelera","Vasito simple","Con formas"];
// const precioVela=["$700","$800","$900","$920","$1000","$1300","$1400","$1500"];


// const tamanoYrecipiente = (("Tamaños: "+tamanoVela+"\n").concat("Recipientes: "+recipienteVela+"\n"));
// const aromaYprecio = (("Aromas: "+aromasVelas+"\n").concat("Precios: "+precioVela));
// const velas = tamanoYrecipiente.concat(aromaYprecio);
// console.log(velas);





// //Declaramos una clase para los aromas 
// class aromas {
//     constructor(nombre, disponibilidad) {
//         this.nombre = nombre,
//             this.disponibilidad = disponibilidad
//     }
//     habilitar() {
//         let error = "Aroma disponible"
//         if (this.disponibilidad == false) {
//             this.disponibilidad = true
//         } else {
//             console.log(error);
//         }
//     }
//     deshabilitar() {
//         let error = "Aroma NO disponible"
//         if (this.disponibilidad == true) {
//             this.disponibilidad = false
//         } else {
//             console.log(error)
//         }
//     }
// }


// //Creamos nuevos objetos de aromas
// let arom1 = new aromas("Lavanda", true);
// let arom2 = new aromas("Jazmín", false);
// let arom3 = new aromas("Vainilla", false);
// let arom4 = new aromas("Coco", true);
// let arom5 = new aromas("Sandía", true);
// let arom6 = new aromas("Chocolate", true);
// let arom7 = new aromas("Limón", false);
// let arom8 = new aromas("Canela", true);

// //Array vacío para guardar los datos de aromas
// const listaAromas = []
// //Los pusheamos
// listaAromas.push(arom1, arom2, arom3, arom4, arom5, arom6, arom7, arom8);
// //Los vemos por consola.
// console.log(listaAromas);
// let verAromasDispo = prompt("¿Quieres ver los aromas disponibles?" + "\n" + "SI o NO");


// while (verAromasDispo != "NO") {
//     if (verAromasDispo == "SI") {
//         const disponibles = listaAromas.filter(aroma=> aroma.disponibilidad == true);
//         alert(disponibles)
//     } else {
//         alert("¡Gracias por tu visita!")
//         break
//     }
//     verAromasDispo = prompt(`¿Quieres seguir viéndolos?, SI o NO`);
// }




//DESCUENTO
// //Solicitamos que ingrese el precio 
// // let precio = parseInt(prompt("Ingresa el costo de tu vela elegida, y te diremos en cuanto queda!"));

// function apliDesc(precio) {
//     //Aplico 30% de descuento al precio
//     return (precio * 30) / 100;
// }
// //Variable que guada el resultado del descuento
// let valorDesc = apliDesc(precio);

// //Obtengo precio final mediante resta
// let precioFinal = precio - valorDesc;

// //PRECIO + IVA
// //Declaramos variables (de suma y resta) anónimas con función flecha.
// const suma = (a, b) => a + b
// const resta = (a, b) => a - b

// //Calculamos el precio con iva
// const iva = precio => precio * 0.21;
// let precioOriginal = precio;
// let precioDesc = valorDesc;
// //Cálculo el precioOriginal + IVA - Descuento.
// let precioConIva = resta(suma(precioOriginal, iva(precioOriginal)), precioDesc);
// //Mostramos por pantalla el resultado
// // alert("El precio con descuento + IVA seria de: $" + precioConIva);





// const Velas=[
//     {
//         nombre: "Vela 1",
//         tamano: "6,5cm",
//         precio: "$800",
//         aroma: "Lavanda",
//         recipiente: "En caramelera",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 2",
//         tamano: "6,5cm",
//         precio: "$700",
//         aroma: "Limón",
//         recipiente: "En vasito simple",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 3",
//         tamano: "6,5cm",
//         precio: "$700",
//         aroma: "Coco",
//         recipiente: "Con forma",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 4",
//         tamano: "8cm",
//         precio: "$1000",
//         aroma: "Vainilla",
//         recipiente: "En caramelera",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 5",
//         tamano: "8cm",
//         precio: "$920",
//         aroma: "Jazmín",
//         recipiente: "En vasito simple",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 6",
//         tamano: "8cm",
//         precio: "$900",
//         aroma: "Canela",
//         recipiente: "Con forma",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 7",
//         tamano: "10cm",
//         precio: "$1500",
//         aroma: "Coco",
//         recipiente: "En caramelera",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 8",
//         tamano: "10cm",
//         precio: "$1400",
//         aroma: "Limón",
//         recipiente: "En vasito simple",
//         disponibilidad: true,
//     },
//     {
//         nombre: "Vela 9",
//         tamano: "10cm",
//         precio: "$1300",
//         aroma: "Vainilla",
//         recipiente: "Con forma",
//         disponibilidad: true,
//     },
// ]



// let pregunta = prompt("Quieres ver nuestras velas?")
// for(const vela of Velas){
//     if(pregunta == "SI"){
//         let presentacion = ("Velas del catálogo:  "+ vela.nombre +"\n"+"\n"+ "Tamaño: " +vela.tamano +"\n"+"Precio: "+ vela.precio +"\n"+"Aroma: "+ vela.aroma +"\n"+"Recipiente: "+ vela.recipiente);
//         alert(presentacion)
//     }else{
//         alert("Chauu");
//     }
// }




//Con forEach, retornamos los numeros de las velas.
// Velas.forEach(vela => console.log(vela.numero));

// //Filtramos las velas disponibles
// const velasDispo=Velas.filter(vela=>vela.disponibilidad == true);
// console.table(velasDispo);


// //Estructura de las velas en promo

// class promo {
//     constructor(forma, tamano, precio) {
//         this.forma = forma,
//             this.tamano = tamano,
//             this.precio = parseInt(precio)
//     }
// }

// //Creamos nuevos objetos

// let promo1 = new promo("Corazón", "Mediano", 845);
// let promo2 = new promo("Letra", "Chico", 650);
// let promo3 = new promo("Pirámide", "Mediano", 860);
// let promo4 = new promo("Flor", "Grande", 1050);
// let promo5 = new promo("Luna", "Chico", 645);

// //Creamos el array donde guardaremos los datos de las promos.
// const promos = [];

// //Pusheamos todos los datos.
// promos.push(promo1, promo2, promo3, promo4, promo5);


// //Y por último mediante un for of mostramos las promos del día por pantalla
// let pregunta = prompt("¿Quieres ver las promos del día? SI o NO." + "\n" + "-Respeta mayúsculas-");

// for (const velas of promos) {
//     if (pregunta == "SI") {
//         let presentacion = ("Promos de HOY: " + "\n" + velas.forma + "\n" + velas.tamano + "\n" +"$"+ velas.precio);
//         alert(presentacion);
//     } else if (pregunta == "NO") {
//         alert("¡Gracias por visitar nuestra página " + usuario + "!");
//         //Usamos un break para que finalice
//         break;
//     }
// }



// // //1er ENTREGA DEL PROYECTO FINAL.


// // class Producto{
// //     constructor(numero,tamano,precio,aroma,recipiente,disponibilidad){
// //         this.numero=numero;
// //         this.tamano=tamano;
// //         this.precio=parseInt(precio);
// //         this.aroma=aroma;
// //         this.recipiente=recipiente;
// //         this.disponibilidad=disponibilidad;
// //     }
// //     habilitar(){
// //         let error = "Vela disponible"
// //         if(this.disponibilidad == false){
// //             this.disponibilidad = true
// //         }else{
// //             console.log(error);
// //         }
// //     }
// //     deshabilitar(){
// //         let error = "Vela NO disponible"
// //         if(this.disponibilidad == true){
// //             this.disponibilidad = false
// //         }else{
// //             console.log(error)
// //         }
// //     }
// // }


// // //Array de objetos
// // //Todas las velas...

// // const Velas=[
// //     {
// //         numero: "Vela 1",
// //         tamano: "6,5cm",
// //         precio: 800,
// //         aroma: "Lavanda",
// //         recipiente: "En caramelera",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 2",
// //         tamano: "6,5cm",
// //         precio: 700,
// //         aroma: "Limón",
// //         recipiente: "En vasito simple",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 3",
// //         tamano: "6,5cm",
// //         precio: 700,
// //         aroma: "Coco",
// //         recipiente: "Con forma",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 4",
// //         tamano: "8cm",
// //         precio: 1000,
// //         aroma: "Vainilla",
// //         recipiente: "En caramelera",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 5",
// //         tamano: "8cm",
// //         precio: 920,
// //         aroma: "Jazmín",
// //         recipiente: "En vasito simple",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 6",
// //         tamano: "8cm",
// //         precio: 900,
// //         aroma: "Canela",
// //         recipiente: "Con forma",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 7",
// //         tamano: "10cm",
// //         precio: 1500,
// //         aroma: "Coco",
// //         recipiente: "En caramelera",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 8",
// //         tamano: "10cm",
// //         precio: 1400,
// //         aroma: "Limón",
// //         recipiente: "En vasito simple",
// //         disponibilidad: true,
// //     },
// //     {
// //         numero: "Vela 9",
// //         tamano: "10cm",
// //         precio: 1300,
// //         aroma: "Vainilla",
// //         recipiente: "Con forma",
// //         disponibilidad: true,
// //     },
// // ]


// // //Creamos el array de carrito.
// // const Carrito = []

// // //Preguntamos si desea comprar
// // //Si dice si muestra los productos, luego agrega productos, unidades y por ultimo muestra el total con descuento incluido.
// // //Si dice no finaliza ahí mismo.

// // let comprar = prompt("¿Desea hacer una compra? (SI o NO)");

// // while (comprar != "S") {
// //     if (comprar == "SI" || comprar == "Si" || comprar == "si") {
// //         alert("A continuación mostramos nuestras velas!")
// //         for(const vela of Velas){
// //         alert(catalogo = ("Velas del catálogo:  "+ vela.numero +"\n"+"\n"+ "Tamaño: " +vela.tamano +"\n"+"Precio: $"+ vela.precio +"\n"+"Aroma: "+ vela.aroma +"\n"+"Recipiente: "+ vela.recipiente));
// //         }
// //     } else if (comprar == "no" || comprar == "No" || comprar == "NO") {
// //         alert("¡Gracias por visitar nuestra página!")
// //         break
// //     }
// //     break;
// // }

// // while(comprar == "SI"|| comprar == "Si" || comprar == "si"){
// // let producto = prompt("Agrega un producto a tu carrito (ej: vela 1)");
// // let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
// // let precio = 0

// // while (producto != "S") {
// //     if (producto == "vela 1" || producto == "vela 2" || producto == "vela 3" || producto == "vela 4" || producto == "vela 5" || producto == "vela 6" || producto == "vela 7" || producto == "vela 8" || producto == "vela 9") {

// //         switch (producto) {
// //             case "vela 1":
// //                 precio = 800;
// //                 break;
// //             case "vela 2":
// //                 precio = 700;
// //                 break;
// //             case "vela 3":
// //                 precio = 700;
// //                 break;
// //             case "vela 4":
// //                 precio = 1000;
// //                 break;
// //             case "vela 5":
// //                 precio = 920;
// //                 break;
// //             case "vela 6":
// //                 precio = 900;
// //                 break;
// //             case "vela 7":
// //                 precio = 1500;
// //                 break;
// //             case "vela 8":
// //                 precio = 1400;
// //                 break;
// //             case "vela 9":
// //                 precio = 130;
// //                 break;
// //             default:
// //                 alert("No tenemos ese producto")
// //                 break;
// //         }
// //     }else{
// //         alert("No tenemos ese producto")
// //         producto = prompt("Agrega un producto a tu carrito (ej: vela 1)");
// //         unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
// //     }

// //     let finalizar = prompt("Ya terminaste tu compra?, Si o No")
// //     if(finalizar == "Si"|| finalizar == "SI"|| finalizar == "si"){
// //         alert("Muchas gracias por tu compra!")
// //         break;
// //     }else if(finalizar == "No"||finalizar == "NO"||finalizar == "no"){
// //         producto = prompt("Agrega un producto a tu carrito");
// //         unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"));
// //     }
// // }



// // Carrito.push({
// //     producto,
// //     unidades,
// //     precio
// // })
// // console.log(Carrito)



// // let total = Carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// // console.log(total)

// // //DESCUENTO

// // function apliDesc(total) {
// //     //Aplico 30% de descuento al precio
// //     return (total * 30) / 100;
// // }
// // //Variable que guada el resultado del descuento
// // let valorDesc = apliDesc(total);

// // //Obtengo precio final mediante resta
// // let precioFinal = total - valorDesc;
// // console.log(precioFinal)


// // alert(`El total a pagar por su compra con descuento incluido es: $ ${precioFinal}`);

// // const hoy = new Date();
// // alert("Fecha de la compra: " + hoy.toLocaleString() )

// // break;
// // }


// // //Diseño del enlaces de carrito a Index.
// // let enlace = document.getElementById(`enlace_car`);
// // enlace.innerText = "Volver a Inicio>";
// // enlace.style.color = "white";
// // enlace.style.textDecoration = "underline";


// // //CARDS 
// // let cartas = document.getElementById(`cartas`);
// // for(const Vela of Velas) {
// //     let carta = document.createElement(`div`);
// //     carta.className = `card`
// //     carta.innerHTML = `
// //         <div class="card-body">
// //             <h5 class="card-title">${Vela.numero}</h5>
// //             <p class="card-text">${Vela.tamano}</p>
// //             <p class="card-text">${Vela.precio}</p>
// //             <p class="card-text">${Vela.aroma}</p>
// //             <p class="card-text">${Vela.recipiente}</p>
// //             <button class="btn btn-primary">Agregar al carrito
// //             </button>
// //         </div>
// //     `;
// //     cartas.append(carta);
// // }

// // //Texto del Carrito
// // let text = document.getElementById(`text`);
// // let div = document.createElement(`div`);
// // div.innerHTML = `
// // <h2>Tu carrito</h2>
// // <hr>
// // <p>Total:</p>
// // <button class="btn btn-primary">Finalizar compra</button>
// // `;
// // text.append(div)