
function OtraPersona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new OtraPersona("homero", 29, "Calle 144");
const persona2 = new OtraPersona("Josh", 23, "Calle 143");




/*function mostrarAtributo(atributo, persona){
    alert(persona[atributo]);
}
*/



/// IN Y FOR IN recorrer propiedades

for (let propiedad in OtraPersona){
    alert(`${propiedad}: ${OtraPersona[propiedad]}`);
}
///CONSTRUCTOR DE PRODUCTOS

function Producto(nombre, precio, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

///GENERAR PRODUCTO

const producto1 = new Producto("leche", 6000,"Trebol");

let nombrePdroducto = prompt('Ingrese nombre del producto');
let precioP = +prompt('Ingrese el precio del producto');
let marcaP = prompt('Ingrese marca');

const productoNuevo = new Producto(nombrePdroducto, precioP, marcaP);

function mostrarP(Producto){
    alert(
        `nombre: ${productoNuevo.nombre} \n
        precio: ${productoNuevo.precio} \n
        marca: ${productoNuevo.marca}`
    );
}

mostrarP(productoNuevo);