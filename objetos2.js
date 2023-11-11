//el uso de const se usa const ya que las propiedades se almacenan en una caja, el const no almacena la informacionddentro, almacena la informacion general, la caja

const  objetox = {propiedad1: "x"}; //objetox no almacena a x, almacena la referencia de x, y esa caja si es constante

//ACCIONES, GENERANDO OBJETOS 

function Pokemon(nombre,tipo, entrenador, defensa, vida, ataque, tipoAtaque){
    //PROPIEDADES
    this.nombre = nombre;
    this.tipo = tipo;
    this.entrenador = entrenador;
    this.defensa = defensa;
    this.vida = vida;
    this.ataque = ataque;
    this.tipoAtaque = tipoAtaque;
    //ACCIONES/ COMPORTAMIETNOS/ METODOS
    this.atacar = function(nombrePokemonEnemigo){
        alert(`${this.nombre} ataca a ${nombrePokemonEnemigo} con ataque ${this.tipoAtaque}`);
    }
    this.evolucionar = function(nombreEvolucionado, adicionalAtaque, adicionalVida){
        alert('El pokemon esta evolucionando...');
        this.ataque = this.ataque + adicionalAtaque;
        this.vida = this.vida + adicionalVida;
        this.nombre = nombreEvolucionado;
        alert(`A evolucionado, ahora se llama ${this.nombre}\n
                su ataque ahora es de ${this.ataque} \n
                su vida ahora es de ${this.vida}`);
    }
    this.recibirAtaque = (PokemonEnemigo, ataqueRecibido) => {
        alert(`El Pokemon ${PokemonEnemigo} te pego con ${tipoAtaque} con una cantidad de ataque de ${ataque}`);
        if(this.defensa < ataqueRecibido){
            this.vida = this.vida - (ataqueRecibido - this.defensa);
            if(this.vida <= 0){
                alert(`El Pokemon ${this.nombre} se murio`);
            }
        }
    }
}

const Pokemon1 = new Pokemon('pikachu', 'Ash', 'Electrico', 100, 250, 50, 'IMPAC TRUENO');
const Pokemon2 = new Pokemon('Charmander', 'Melinda', 'Fuego', 0, 120, 80, 'BOLA DE FUEGO');

Pokemon1.atacar(Pokemon2.nombre);
Pokemon2.recibirAtaque(Pokemon1.nombre,Pokemon1.ataqueRecibido, Pokemon1.ataque);
Pokemon1.evolucionar('Raichu', 20, 30);
Pokemon2.recibirAtaque(Pokemon1.nombre, Pokemon1.ataque);

