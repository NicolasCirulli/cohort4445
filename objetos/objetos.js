// crear objeto

const nico = {
    nombre : 'Nicolas',
    apellido : 'Cirulli',
    altura: 174,
    tecnologias: [ 'HTML', 'CSS', 'JAVASCRIPT', 'VUE' ],
    tienePelo : true,
};


const metodos = {
    saludar : function(){
        console.log( 'hola soy ' + this.nombre )
    }
};

const mentorDos = nico;

// modificar una propiedad

mentorDos.nombre = 'Nicolas Catriel';

// agregar una propiedad

mentorDos.edad = 28;

// eliminar una propiedad

/* delete mentor.tienePelo  */


// metodo de un objeto

/* mentor.saludar()  */

let lucre = {
    nombre: 'Lucre',
    edad: 27,
    mascota: 'Kugi',
};

Object.assign( lucre, metodos );
Object.assign( nico, metodos ); 

lucre.saludar();
/* nico.saludar(); */

console.log( lucre );

const entries = Object.entries( lucre );

const values = Object.values( lucre );

const keys = Object.keys( lucre );

/* Object.freeze( nico ); */

nico.nombre = 'Nico';

console.log( Object.hasOwn(nico, 'saludar') )










