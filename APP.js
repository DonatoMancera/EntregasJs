/*CALCULADORA*/

let num1;
let num2;
let operacion;
let resultado = 'ERROR';

const SUMA = "+";
const RESTA = "-";
const DIVISION = "/";
const PRODUCTO = "*";

prompt('Bienvenido a la calculadora' + '\n'
    + '"+" sumar ' + '\n'
    + '"-" restar' + '\n'
    + '"*" multiplicar' + '\n'
    + '"/" dividir' + '\n'
    + 'Ingrese la operacion que desea realizar'
);

num1 = +prompt('Ingrese el primer numero');
num2 = +prompt('Ingrese el segundo numero');

switch (operacion){
    case SUMA:
        resultado = num1 + num2;
        break;
    case RESTA:
        resultado = num1 - num2;
        break;
    case PRODUCTO:
        resultado = num1 * num2;
        break;
    case DIVISION:
        if (num2 !== 0) {
            resultado = num1 / num2;
        }else{
            alert('No se puede dividir por 0');
        }
    default:
        alert('Usted ha  ingreado una operacion incorrecta');
        break;
}
alert(`El resultado es: ${resultado}`); 
