

const miArray = ['a','b','c'];
const numeros = [5,6,7,8,10];
let total = 0;

function suma(valor){
    total  = total + valor;
}

function porCadauno(array, accion){
    for(let elemento of array){
        accion(elemento);
    }
}

porCadauno(numeros, suma);
alert(`el Total es: ${total}`);