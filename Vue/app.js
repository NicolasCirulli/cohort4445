const { createApp } = Vue

const valorant = axios.create({ baseURL : 'https://valorant-api.com/v1/' })

const app = createApp( {

    data(){
        return {
            valorBusqueda : '',
            personajes :[],
            categorias : [],
            checked : [],
            personajesFiltrados : [],
            favoritos : []
        }
    },
    created(){
            /* 
                fetch( 'https://valorant-api.com/v1/agents' )
                .then( response => response.json() )
                .then( ( { data } ) => { 
                    this.personajes = data.filter( personaje => personaje.isPlayableCharacter )
                    this.personajesFiltrados = this.personajes
                    this.categorias = [... new Set( data.filter( personaje => personaje.isPlayableCharacter ).map( personaje => personaje.role.displayName ) )]
                }
                )
                .catch( err => console.log( err ) ) 
            */
            this.getData()
            this.favoritos = JSON.parse( localStorage.getItem('favoritos') ) || []
    },
   
     methods: {
        // aca van las funciones
        async getData(){
            try{
                const { data:{data} } = await valorant( 'agents' ) 
                this.personajes = data.filter( personaje => personaje.isPlayableCharacter )
                this.personajesFiltrados = this.personajes
                this.categorias = [... new Set( data.filter( personaje => personaje.isPlayableCharacter ).map( personaje => personaje.role.displayName ) )]
           
            }catch(err){
                console.log(err)
            }
        },
        borrarFavoritos(){
            this.favoritos = []
        }

    }, 
    computed : {
        filtro(){
                let filtradoBusqueda = this.personajes.filter( personaje => personaje.displayName.toLowerCase().includes( this.valorBusqueda.toLowerCase() ) )
                let filtradoCheck = filtradoBusqueda.filter( personaje => this.checked.includes( personaje.role.displayName ) || this.checked.length == 0 )
                this.personajesFiltrados = filtradoCheck   
        },
        handleFav(){
            localStorage.setItem( 'favoritos', JSON.stringify( this.favoritos ) )
        }
    }
    
})

app.mount('#app')



/* // spread operator

const numeros = [  ...new Set([100,2,3,4,5,6,5,5,1,2,3 ])   ]

console.log( numeros )

const mentor = {
    nombre : 'Nicolas',
    apellido : 'Cirulli',
    edad : 28
}
const copiaMentor = { ...mentor } */


// destructuring
/* 
const mentorDos = {
    nombre : 'Lucre',
    apellido : 'Gillone',
    edad : 28
}

let { apellido:apellidoLucre, nombre, edad } = mentorDos
console.log( apellidoLucre )
mentorDos.apellido = 'GILLONE'
console.log( mentorDos )
console.log( apellidoLucre )
 const nombre = mentorDos.nombre
const apellidoLucre = mentorDos.apellido
const edad = mentorDos.edad 

// destructuring en funciones

const saludar= ( ( {nombre, apellido} )  => {
    console.log( `Hola soy: ${nombre} ${apellido}` )
})

saludar( mentor )
saludar( mentorDos ) */

