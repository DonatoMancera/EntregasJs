let personaje1 = "Donato";
let personaje2 = "Kevin";
let personaje3 = "Eduardo";
let personaje4 = "Helen";
let opcion;

opcion = +prompt('ELIJE UN PERSONAJE DE 1 A 4');

switch (opcion) {
    case 1:
        alert('Elejiste el personaje de Donato');
        break;
    case 2:
        alert('Elejiste el personaje de Kevin');
        break;
    case 3:
        alert('Elejiste el personaje de Eduardo');
        break;
    case 4:
        alert('Elejiste el personaje Helen');
        break;
    default:
        alert('Eleccion incorrecta');
        break;
}
