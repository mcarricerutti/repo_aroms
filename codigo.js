//Código JS, desafio entregable.

let usuario= prompt("Ingresa tu nombre");
alert("¡Bienvenida a -AROMS- " + usuario + "!");


let entrada =  prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-Enter- para salir!)");
while(entrada != " "){
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
            alert(d)
            break;
    }entrada = prompt("INGRESA 1(PRECIOS), 2(VER MODELOS) Y 3(AROMAS),(¡-Enter- para salir!).");
}

