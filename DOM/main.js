// Dejar de tarea remove y toggle

// metodos del dom que nos sirven para recuperar referencias a elementos

// Recupera un elemento por id
const $h1 = document.getElementById( 'titulo' ) 
$h1.textContent = 'Mentores'
// Recupera el primer elemento que coincida con el selector
const $h1PorSelector = document.querySelector( "h1" )

// Recupera todos los elementos que coincidan con el selector y nos da un nodelist
const $parrafos = document.querySelectorAll( "p" )

const $main = document.getElementById( "main" )

const mentor = {
    nombre : 'Nicolas',
    edad : 28,
    rol : 'Mentor',
    imagen: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
}

/* const template = `
<div class="card border-primary">
    <img class="card-img-top" src="${mentor.imagen}" alt="Imagen de la mascota de ${mentor.nombre}">
    <div class="card-body">
        <h4 class="card-title"> ${ mentor.nombre } </h4>
        <p class="card-text"> ${ mentor.rol } </p>
    </div>
</div>
` */

/* $main.innerHTML = template */




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

function crearElemento(mentor){
    // crear elementos
    let imagenMentor = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
    const divContenedor = document.createElement( 'div' )
    divContenedor.className = "card"
    divContenedor.classList.add( "border-primary" )

    const imagen = document.createElement( 'img' )
    imagen.src = imagenMentor
    imagen.alt = `Imagen de la mascota de ${ mentor.nombre }`
    imagen.className = "card-img-top"

    const divBody = document.createElement('div')
    divBody.classList.add( 'card-body' )

    const h4 = document.createElement('h4')
    h4.className = 'card-title'
    h4.textContent = mentor.nombre


    const p = document.createElement( 'p' )
    p.className = 'card-text'
    p.textContent = mentor.rol

    divBody.append( h4, p )

    divContenedor.append( imagen, divBody )
    return divContenedor
}

function pintarTarjetasNodos(listaMentores, elemento){
    const fragment = document.createDocumentFragment()
    for( let mentor of listaMentores ){
        fragment.appendChild( crearElemento(mentor) )
    }
    elemento.appendChild( fragment )
}

function crearTarjetaConInner( mentor ){
    let imagen = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
    return `
    <div class="card border-primary">
        <img class="card-img-top" src="${imagen}" alt="Imagen de la mascota de ${mentor.nombre}">
        <div class="card-body">
            <h4 class="card-title"> ${ mentor.nombre } </h4>
            <p class="card-text"> ${ mentor.rol } </p>
        </div>
    </div> ` 
}

function pintarTarjetas( listaMentores, elemento ){
    let template = ''
    for( let mentor of listaMentores ){
        template += crearTarjetaConInner( mentor )
    }
    elemento.innerHTML = template
}

function filtrarLista( lista, clave='especialidad',valor='JavaScript'){
    let aux = []
    for( let i = lista.length - 1 ; i >= 0 ; i-- ){
        if( lista[i][clave].includes( valor )){
            aux.push( lista[i] )
        }
    }
    return aux
}

const mentoresReact = filtrarLista( mentores,'especialidad', 'React' )

pintarTarjetas( mentores , $main )


