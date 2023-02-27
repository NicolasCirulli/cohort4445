const obj = {}
const mentores = [ 'nicolas', 'lucre','cami'];
const mentoresDos = ['kevin','guille','flor',obj];


console.log( mentores[ mentores.length - 1] ) 


/* mentores.push( 'fede' ) */

/* mentores.pop() */

/* mentores.unshift( 'fede', 'jose' )

console.log( mentores.shift() ) */

const nuevoArray = mentoresDos.concat( mentores )

console.log( nuevoArray )

console.log( nuevoArray.includes( obj ) )

console.log( nuevoArray.indexOf(obj) )

nuevoArray[3].nombre = 'Nicolas'

console.log( obj )


console.log( nuevoArray.join( ' ' ) )

console.log( nuevoArray.reverse() )

const otroArray = [ [1,2,3], [4,5,6,[7,8,9]] ]
console.log( otroArray.flat( 5 ) )

const copiaMentores = Array.from( mentores )


console.log( copiaMentores == mentores)

