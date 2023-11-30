/*OBTENER  */

// primera forma:  por HTMLconst boton = document.getElementById('boton1');
//SEGUNDA FORMA PARA TRAERLO DESDE CSS: const boton = document.querySelector('#boton1');

/*const boton = document.querySelector('#boton1'); //LA INFORMACION QUE SE TRAE SE PUEDE RECORRER CON UN FOR EACH

boton.addEventListener('click', mostrarMensaje);
function mostrarMensaje(){
    alert('ME HICISTE CLICK');
}

/* ATRIBUTOS DE MI OBJETO QUE DEFINEN LISTENER

const boton2 = document.querySelector('#boton2');

boton2.onclick = () =>{
    alert('hiciste click al otro boton ');
} 

*/

///INFORMACION DE UN EVENTO

const miCheckBox = document.querySelector('#id-checkbox');

miCheckBox.addEventListener('click', (e) =>{
    console.log(e);
})