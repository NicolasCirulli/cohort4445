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





function encontrarIndice( lista, nombre ){
    let indice = -1
    for( let i = 0; i < lista.length ; i++ ){
        const condicion = lista[i].nombre == nombre
        if( condicion ) return i
    }
    return indice
}

/* const indiceCami = encontrarIndice( mentores, "Camila" ) */
/* const indiceLucre = encontrarIndice( mentores, "Lucrecia" )
const indiceNico = encontrarIndice( mentores, "Nicolas" ) */

function filtrarLista( lista, clave='especialidad',valor='JavaScript'){
    let aux = []
    for( let i = lista.length - 1 ; i >= 0 ; i-- ){
        if( lista[i][clave].includes( valor )){
            aux.push( lista[i] )
        }
    }
    return aux
}

const mentoresBootstrap = filtrarLista( mentores,'especialidad', 'Bootstrap'  )
const mentoresJavaScript = filtrarLista( mentores,'especialidad', 'JavaScript')
const mentoresReact = filtrarLista( mentores,'especialidad', 'React' )


// for of
const numeros = [17,1,2,3,4,5,6,22,7,8,9,10]

let numerosPares = []
for( let numero of numeros ){
    if( numero % 2 == 0 ){
        numerosPares.push( numero )
    }
}
console.log( numerosPares )

/* for( let mentor of mentores ){
    if(  mentor.nombre === 'Nicolas' ) continue
    console.log( mentor.nombre )
} */


// for in

let persona = {
    nombre : 'nicolas',
    edad : 28,
    mascota: 'Kugi',
    rol : 'Mentor'
}

let keysPersona = []
for( let key in persona ){
    keysPersona.push(key)
}
console.log( keysPersona )

/* for( let mentor of mentores ){
    console.log( mentor )
    for( let key in mentor){
        console.log( key )
    }
    console.log( '----------' )
} */

/* let i = 1
while ( i <= 10 ) {
    console.log( i )
    i += 1
} */
let valoresIngresados = []
let ingresado
do {
    ingresado = prompt( 'Ingrese un nombre si quiere continuar ' )
    if( ingresado ){ 
        valoresIngresados.push( ingresado )
    }
    console.log( ingresado )
} while ( ingresado );

console.log( valoresIngresados )





