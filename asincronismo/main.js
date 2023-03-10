
// promesas
/* const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve( 'Salio bien' )
    }, 2000)
})
const siSaleBien = respuesta => console.log( respuesta )
const siSaleMal = err => console.log(err)
const cuandoTermina = () => console.log( 'Termino' )
promesa
    .then( siSaleBien )
    .catch( siSaleMal )
    .finally( cuandoTermina ) */
        
// fetch
console.log( 'inicio' )
const url = 'https://valorant-api.com/v1/agents'

let mentores = {}

fetch( url )
    .then( response => {
        console.log('entre al then de la api de valorant')
        return response.json()
    } )
    .then( datos => console.log( datos ))
    .catch( err => console.log( err ) )  

fetch( './mentores.json' )
    .then( response => {
        console.log('entre al then')
        return response.json()
    })
    .then( datos => {
        console.log( 'entro al segundo then' )
        console.log('Datos: ', datos )
        mentores.data = datos
    } )
    .catch( err => console.log( err ) )

console.log( mentores )
console.log( 'fin' )

function ejecucion(){

}
