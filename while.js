//WHILE

let total = 0;
let precio;
let cantidad;
let continuar = "si";

while(continuar === 'si'){
    precio = +prompt('Ingrese precion del nuevo producto');
    cantidad = +prompt('Ingrese cantidad');
    total = total + (precio*cantidad);
    continuar = prompt('desea ingresar otro item? si/no');
    while(continuar !== 'no' && continuar !== 'si'){
        continuar = prompt('Debe ingresar "si" o "no"');
    }
}

alert(`El total del carrito es $${total}`);