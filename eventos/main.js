const $ = s => document.querySelector(s)  
const $select = $('#select')
const $main = $('#card-container')
const $radioContainer = $('#radio-container')
const data = personajes.data.filter( personaje =>  personaje.isPlayableCharacter )
/* .filter( ( personaje, indice, arrayOriginal) => indice == arrayOriginal.indexOf( personaje ) ) */

const listaRoles = Array.from( new Set( data.map( personaje => personaje.role.displayName ) ) )
const options = listaRoles.reduce( (acc, role) =>  acc += `<option value="${role}">${role}</option>`, '' )
$select.innerHTML += options

pintarTarjetas( data, $main  )

$select.addEventListener( 'change', e => {
    pintarTarjetas( filtroCruzado(), $main  )
} )

$radioContainer.addEventListener( 'change', e =>{
    pintarTarjetas( filtroCruzado(), $main  )
})

function filtroCruzado(){
    return filtroRadio( filtroSelect( data, $select.value )  )
}

function filtroRadio( listaPersonajes ){
    const radioChecked = document.querySelector( 'input[type="radio"]:checked' )
    if( radioChecked.value === 'all' ) {
        return listaPersonajes
    }
    return listaPersonajes.filter( personaje => {
        if( radioChecked.value === 'base' ) {
            return personaje.isBaseContent
        }else{
            return !(personaje.isBaseContent)
        }

    } )
}

function filtroSelect( listaPersonajes, role ){
   if(  role === 'all' ) {
     return listaPersonajes
   }
   return listaPersonajes.filter( personaje => personaje.role.displayName === role )
}

function crearTarjeta( personaje ){
    return `
            <div class="card col-9 col-md-3">
            <img class="card-img-top" src="${personaje.fullPortraitV2}" alt="Title">
            <div class="card-body">
                <h4 class="card-title text-center">${personaje.displayName}</h4>
                <p class="card-text text-center">${personaje.description}</p>
                <p class="card-text text-center">${personaje.role.displayName}</p>
                <div class="col-10 d-flex gap-5"> 
                    <a class="btn btn-secondary col-5" href="#" > details </a> 
                </div>
            </div>
        </div>
    `
}

function pintarTarjetas( lista, elemento ){
    let template = ''
    lista.forEach( personaje => template += crearTarjeta( personaje ) )
    elemento.innerHTML = template
}