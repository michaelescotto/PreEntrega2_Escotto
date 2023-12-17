//FUNCIÓN DE MENSAJE DE ERROR
const mensajeError = () => {
    alert("Esa opción no existe, por favor intente nuevamente.");
}

//FUNCIÓN PARA VACIAR REL ARRAY DEL CARRITO.
const vaciarCarrito = () => {
    carrito = [];
    alert("El carrito se a vaciado correctamente.")
}

//FUNCIÓN PARA CORRER EL MENÚ DEL CATÁLOGO
const mostrarCatalogo = () => {
    let mensaje = "Catálogo de productos:\n\n"
    for (let i = 0; i < catalogo.length; i++) {
        mensaje += `     ${i + 1}. ${catalogo[i].nombre} - $${catalogo[i].precio}\n`;
    }
    let opcion = parseInt(prompt(mensaje + "\nIngrese la opción deseada o 0 para salir al menu anterior\n")) - 1;
    if (opcion >= 0 && opcion < catalogo.length) {
        carrito.push(catalogo[opcion]);
        alert("Se añadió al carrito correctamente:\n\n" +
            `${catalogo[opcion].nombre} por $${catalogo[opcion].precio}.\n`
        )
    } else if (opcion === -1) {
        return;
    } else {
        mensajeError();
    }
}

//FUNCIÓN PARA CORRER EL MENÚ DEL CARRITO
const mostrarCarrito = () => {
    let mensaje = "Carrito de compras:\n\n"
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `${carrito[i].nombre} - $${carrito[i].precio}\n`
    }
    alert(mensaje);
}

//FUNCIÓN PARA CORRER EL MENÚ DE LA COMPRA
const mostrarCompra = () => {
    mostrarCarrito();
    let total = carrito.reduce((sumaTotal, producto) => {
        return sumaTotal + producto.precio;
    }, 0);
    let confirmacion = prompt(`El total de la compra es de $${total}\n\n` + "¿Desea confirmar la compra?\n\n Escriba SI o NO").toLowerCase();
    if (confirmacion === "si") {
        alert("Compra realizada con éxito, !Muchas gracias por su compra!");
        carrito = [];
    } else if (confirmacion === "no") {
        alert("La compra se ha cancelado, puedes retomar tu compra más tarde.");
    } else {
        mensajeError();
    }
}

//ARRAY CON LOS OBJETOS DE LA TIENDA
const catalogo = [
    { nombre: "Remera", precio: 1500 },
    { nombre: "Pantalón", precio: 4200 },
    { nombre: "Shorts", precio: 2600 },
    { nombre: "Zapatos", precio: 6300 },
    { nombre: "Medias", precio: 300 },
];

//ARRAY VACÍO PARA GUARDAR LOS OBJETOS EN EL CARRITO
let carrito = [];

//FUNCIÓN PARA CORRER EL MENÚ DE LA TIENDA
const mostrarTienda = () => {
    while (true) {
        //VARIABLE CON LA ENTRADA PARA EL MENÚ
        let opcion = prompt(
            "Bienvenido a nuestra tienda de ropa deportiva.\n" +
            "Ingrese la opción deseada para interactuar en el menú:\n\n" +
            "    1. Ver el catálogo\n" +
            "    2. Ver el carrito\n" +
            "    3. Vaciar el carrito\n" +
            "    4. Finalizar la compra\n" +
            "    0. Salir\n"
        );
        switch (opcion) {
            case "1":
                mostrarCatalogo();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                vaciarCarrito();
                break;
            case "4":
                mostrarCompra();
                break;
            case "0":
                return;
            default:
                mensajeError();
        }
    }
}

//LLAMAMOS A LA FUNCIÓN PARA INICIAR EL SIMULADOR
mostrarTienda();