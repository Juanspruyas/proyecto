let diaDescuento = prompt("Ingrese el dia de la semana que se encuentra para ver en que productos TIENE UN 20% DE DESCUENTO");
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


let precio = parseFloat(prompt("Ingrese precio del producto seleccionado para ver el precio con descuento "));
let descuento20 = precio - (precio * 0.2);
let precioFinal = 
    alert ("El valor del producto seria $" + descuento20 + " con el descuento incluido");

console.log(descuento20);

