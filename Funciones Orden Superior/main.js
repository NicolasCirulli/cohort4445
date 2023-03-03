// Funciones Flecha

function sumar(numero1, numero2){
    return numero1 + numero2 
}

const restar = (numero1, numero2) => numero1 - numero2 

const multiplicar = (numero1, numero2) => numero1 * numero2 

const dividirPorDos = numero => numero / 2




// Funcion de orden superior

const calculadora = ( fn, num1, num2 ) => {
    let resultado = fn( num1, num2 )
}
calculadora( sumar, 10, 5 )

calculadora( restar, 10, 5 )

calculadora( (numero1, numero2) => numero1 * numero2, 10, 10 )

calculadora( function( num1, num2){ return num1 / num2 }, 10, 2 ) 
 
// Metodos de array

const mentores = [
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Camila',
        edad : 28,
        apellido: 'Domato',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        nombre: 'Nicolas',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Kevin',
        edad : 30,
        apellido: 'Darnet',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'JavaScript']
    },
    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue']
    },
];


// forEach

/* 
mentores.forEach( mentor  => {
    console.log( `Nombre: ${ mentor.nombre }, edad: ${mentor.edad}` )
}) 
*/

/* 
const fnForEach = (array) => {
    array.forEach( mentor  => {
        console.log( `Nombre: ${ mentor.nombre }, edad: ${mentor.edad}` )
    })
}
fnForEach( mentores )  
*/

// map


const fnMap = mentor => mentor.nombre.toUpperCase()

const nombresMentores = mentores.map( fnMap ) 

const copiaMentores = mentores.map( mentor => {
    let aux = Object.assign( {}, mentor )
    aux.react = aux.especialidad.includes( 'React' )
    return aux
} )


const numeros = [10,1,2,4,150,6,7,8]

const nuevosNumeros = numeros.map( numero => numero * 2 )



// filter

const pares = numeros.filter( function(numero){
    return numero % 2 === 0 
} )
const fnFilter = mentor => mentor.react
const mentoresReact = copiaMentores.filter( fnFilter )


// find

const primerMentorReact = copiaMentores.find( fnFilter )



const primerNumeroPar = numeros.find( numero => numero % 2 === 0 )


// some

const algunNumeroEsPar = numeros.some( numero => numero % 2 === 0 ) 

const algunNumeroMayorA100 = numeros.some( numero => numero > 2 )



// every

const todosPares = numeros.every( numero =>  numero % 2 === 0)


// reduce

/* const resultadoReduce = mentores.reduce( ( acumulador, mentor) => {
    console.log( 'Acumulador:', acumulador )
    return `${acumulador} ${mentor.nombre}`
}, "Mentores:" )

console.log( resultadoReduce ) */
/* const fnReduce =  ( acumulador, numero, indice ) => {
    console.log( `Acumulador: ${acumulador} + Valor actual: ${numero} y devuelve ${acumulador + numero}` )
    return acumulador + numero
}
const sumaReduce = numeros.reduce( fnReduce , 0 ) */
/* 
console.log( sumaReduce ) */

console.log(  mentores )
console.time('reduce')
const tecnologias = mentores.reduce( ( acc, act) => {
        
        act.especialidad.forEach( tecnologia => {
            if( acc[ tecnologia ]  ){
                acc[ tecnologia ].push( act.nombre )
            }else{
                acc[tecnologia] = [ act.nombre ]
            }
        } )  

        return acc
}, {} )
console.timeEnd('reduce')
console.log( tecnologias )



