//FUNCIÓN PARA CORRER EL MENÚ DEL CATÁLOGO
const mostrarCatalogo = () => {

}
//FUNCIÓN PARA CORRER EL MENÚ DEL CARRITO
const mostrarCarrito = () =>{

}
//FUNCIÓN PARA CORRER EL MENÚ DE LA COMPRA
const mostrarCompra = () =>{

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
const carrito = []


//FUNCIÓN PARA CORRER EL MENÚ DE LA TIENDA
const mostrarTienda = () => {
    while (true) {
        //VARIABLE CON LA ENTRADA PARA EL MENÚ
        let opcion = prompt(
            "Bienvenido a nuestra tienda de ropa deportiva.\n\n" +
            "Ingrese la opción deseada para interactuar en el menú:\n\n" +
            "   1. Ver el catálogo\n" +
            "   2. Ver el carrito\n" +
            "   3. Finalizar la compra\n" +
            "   4. Salir\n"
        );
        switch (opcion) {
            case "1":
                mostrarCatalogo();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                mostrarCompra();
                break;
            case "4":
                return;
            default:
                alert("Esa opcion no existe, por favor intente nuevamente.");
        }
    }
}

//LLAMAMOS A LA FUNCIÓN PARA INICIAR EL SIMULADOR
mostrarTienda();