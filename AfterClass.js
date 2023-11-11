/*CARRITO DE COMPRAS */

const SI = 'si';
const NO = 'no';
//VARIABLES
let nombre;
let nombreProducto;
let precio;
let cantidad;
let fila;
let total = 0;
let continuar;
let tiket = 'nombre     precio      cantidad        subtotal\n';
//PROGRAMACION

nombre = prompt('Bienvenido, ingrese su nomnre: ');
do{
    nombreProducto = prompt('ingrese un nuevo item\n ingrese su nombre');
    precio = +prompt('precio: ');
    cantidad = +prompt('cantidad');


    fila = `${nombreProducto}     ${precio}              ${cantidad}                ${cantidad*precio} \n`;
    tiket = tiket + fila;
    total = total + (cantidad*precio);



    continuar = prompt('desea volver a cargar otro item? si/no').toLowerCase();
}while(continuar === SI);

tiket = tiket + `TOTAL: $${total}`;

alert(tiket);
alert(`gracias por venir ${nombre}`);
