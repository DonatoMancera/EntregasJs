//ejercicio usando condicionales y bucles



let salir = false;

while(!salir){
    let opcion = prompt('para sacar la tabla de multiplicar de un numero: #1 \npara sacar la potencia de 1 a 10 de un numero: #2 \n SALIR: #3 ');
    let num;
    switch(opcion) {
    case '1':
        num = +prompt('Ingresa un numero para la tabla de multiplicar');
        tabla(num);
        break;
    case '2':
        num = +prompt('Ingresa un numero para la potencia');
        potencia(num);
        break;
    case '3':
        salir = true;
        alert('Adios.');
    default:
        alert('INGRESE LA OPCION CORRECTA #1 O #2');
}
}



tabla(num);

function tabla(){
    let resultado;
    for (let i = 1; i<= 10;i++ ) {
        resultado = num*i;
        console.log(num + ' x ' + i + ' = ' + resultado);
    }
}

function potencia(num){
    for(let i  = 1; i <= 10; i++){
        console.log(num + ' ^ ' + i + ' = ' + Math.pow(num,i));
    }
}
