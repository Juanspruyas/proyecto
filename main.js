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

console.log(descuento20);



//PRIMERA ENTREGA PROYECTO FINAL 


class producto{
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.disponible = true

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

for( let producto of arrayProductos){
let contenedor = document.createElement("div");
//definimor el inner html del elemento con una plantilla de texto
contenedor.innerHTML = "<h3> Nombre:"  + (producto.nombre) + "</h3>"
                       "<p> Precio $:" +  (producto.precio) +"</p>"
                       "<p> Cantidad:" + (producto.detalle) + "</p>";
document.body.appendChild(contenedor); 
 }

//POCO STOCK - MENOS DE 3 PRODUCTOS

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3 );
document.write("<h3>Lista de Productos con poco Stock (menos de 3 unidades): </h3>");
for (let producto of pocoStock) {
    let contenedor = document.createElement ("div");
    // Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = "<h3> Nombre:"  + (producto.nombre) + "</h3>"
                            "<p> Precio $:" +  (producto.precio) +"</p>"
                            "<p> Cantidad:" + (producto.detalle) + "</p>";
document.body.appendChild(contenedor); 
}
var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false");

for (var producto of sinStock) {
    document.write ("<h3> Lista de Productos con stock (menos de 3 unidades)");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = "<h3> Nombre:"  + (producto.nombre) + "</h3>"
                            "<p> Precio $:" +  (producto.precio) +"</p>"
                            "<p> Cantidad:" + (producto.detalle) + "</p>";
document.body.appendChild(contenedor); 
}

console.log(producto.nombre);
console.log(producto.cantidad);
console.log(precioP * cantidadP)
*/


//ENTREGA DE EVENTOS

class Alumno {
    constructor(nombre,email,password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;

    }
}

//defino las variables globales que necesito para trabajarcon dom

let arrayAlumnos = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI  = formulario.children[3].value;
let password = formulario.children[5].value;

let contenedor  = document.querySelector("#alumnoIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

//Defino los elementos de ambos botones

miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener('click',MostrarTodosAlumnos);

//pongo en Focus el primer input

inputNombre.focus();

// Funciones

//Funcion para comprobar el ingreso de datos en inputs

function validarForm() {

    nombreI = formulario.children[1].value;
    emailI   = formulario.children[3].value;
    passwordI   = formulario.children[5].value;
    console.log(nombreI)
    console.log(emailI)
    console.log(passwordI)

if (nombreI == '' || emailI == '' || passwordI == ''){
    alert ('ERROR - Debe completar todos los campos para continuar');
   inputNombre.focus();
   bandera = false;
} else {
    bandera = true;
}
}

//Funcion para agregar alumnos al array de alumnos 
function agregarAlumnos(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm ("Esta seguro de agregar el Alumno?");
        if (opcion == true) {
            let formulario = e.target 
            arrayAlumnos.push(new Alumno(nombreI,emailI,passwordI));
        } else {
            alert("No se agregara el usuario");
        }
    


formulario.children[1].value = "";
formulario.children[3].value = "";
formulario.children[5].value = "";
contenedor.innerHTML = "";
AgregarAlDom();
inputNombre.focus();
} else {
    inputNombre.focus();
}


}
//function para mostrar en dom el ultimo alumno ingresado

function AgregarAlDom() {
    contenedor.innerHTML = `<h3>Ultimo alumno Ingresado</h3>
    <p><strong>Nombre:</strong> ${nombreI}</p>
    <p><strong>Email:</strong>${emailI}</p>
    <p><strong>Password</strong>${password}</p>`;


    displayTodos.innerHTML += `
    <p><strong>Nombre:</strong> ${alumno.nombre}</p>
    <p><strong>Email:</strong>${alumno.email}</p>
    <p><strong>Password</strong>${alumno.password}</p>`;

}
                         



                        








