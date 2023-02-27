// DOC -> https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
// DOC -> https://developer.mozilla.org/es/docs/Glossary/Hoisting


const mentores = [ 
    { 
       nombre: 'Nicolas',
       edad: 28,
       genero:  'Masculino'
    },
    { 
       nombre: 'Lucre',
       edad: 27,
       genero:  'Femenino'
    },
    { 
       nombre: 'Guille',
       edad: 22,
       genero:  'Masculino'
    },
    { 
       nombre: 'Kevin',
       edad: 29,
       genero:  'Masculino'
    },
    { 
       nombre: 'Cami',
       edad: 28,
       genero:  'Femenino'
    },
    { 
       nombre: 'Flor',
       edad: 22,
       genero:  'Femenino'
    },
]

// Declaracion de Funcion 

function saludar(){
   console.log('hola')
}
` `
// Expresión de Función

const saludarDos = function(){
   let nombre = 'Franco'
   console.log( nombre )
}

// Parametros de Funcion && Parametros por default

function saludarAlumno( nombreAlumno = "parametro por default" ){
   console.log(nombreAlumno)
   console.log( nombreAlumno.toUpperCase() )
}



function sumar( numeroUno=0 , numeroDos=0 ){
   let resultado = numeroUno + numeroDos 
   return resultado
} 

const resultadoSuma = sumar( 10, 10 )
console.log( resultadoSuma )

function sumarNumeros(){
   let num1 = parseInt( prompt( 'Ingrese el primero numero' ) )
   let num2 = Number( prompt( 'Ingrese el segundo numero' ) )
   sumar( num1 , num2 )
}

/* sumarNumeros() */


// Return y Alcance de las variables de una funcion
