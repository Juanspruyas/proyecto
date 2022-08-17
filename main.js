/*let diaDescuento = prompt("Ingrese el dia de la semana que se encuentra para ver en que productos TIENE UN 20% DE DESCUENTO");
while(diaDescuento != "terminado"){
switch (diaDescuento) {
    case "lunes":
    alert ("Mesas para 6 y 8 personas");

    break;
    case "martes":
        alert("Todo tipo de muebles de living");

    break;
    case "miercoles":
        alert ("Camas y mesas de luz");

    break;
    case "jueves":
        alert ("Sillas y sillones");

    break;
    case "viernes":
        alert("Muebles de exterior");

    break;
    case "sabado":
        alert("Muebles de cocina");

    break;
   
 

    default:
        alert("Los dias disponibles son: lunes, martes, miercoles, jueves, viernes y sabado");

        break;}
        diaDescuento =  prompt("Al culminar ingrese la palabra \"terminado\" para continuar su busqueda"); }


        function calcularDescuento (){
            return precio - precio * 0.2
        }


        let precio = parseFloat(
            prompt("Ingrese precio del producto seleccionado para ver el precio con descuento "));
let descuento20 = calcularDescuento(precio);
let precioFinal = 
    alert ("El valor del producto seria $" + descuento20 + " con el descuento incluido");

console.log(descuento20);*/


class producto{
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;

    }
}


var arrayProductos = [];
do{
    var comprobacion = prompt("ingrese el producto o terminado para finalizar");
    if (comprobacion === "terminado" ||comprobacion === "Terminado"||comprobacion === "TERMINADO"){
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt("ingrese el precio del producto");
        var cantidadP = prompt ("ingrese la cantidad de productos");
        arrayProductos.push (new producto(nombreP, precioP, cantidadP));
    }
}
while (comprobacion != "terminado" ||comprobacion != "Terminado"||comprobacion != "TERMINADO")

console.log(arrayProductos);

for(var producto of arrayProductos){
    document.write("<h3> El producto ingresado es: " + producto.nombre + "</h3>");
    document.write("<h3> La cantidad del producto ingresado es: " + producto.cantidad + "</h3>");
    document.write("<h3> el precio del producto ingresado es " + (precioP * cantidadP)+"</h3>" );

}

console.log(producto.nombre);
console.log(producto.cantidad);
console.log(precioP * cantidadP);



