const { createApp } = Vue

const app = createApp( {

    data(){
        return {
            valorBusqueda : '',
            personajes : [],
            categorias : [],
            checked : [],
            personajesFiltrados : []
        }
    },
    created(){
        fetch( 'https://valorant-api.com/v1/agents' )
            .then( response => response.json() )
            .then( ( { data } ) => { 
                this.personajes = data.filter( personaje => personaje.isPlayableCharacter )
                this.personajesFiltrados = this.personajes
                this.categorias = [... new Set( data.filter( personaje => personaje.isPlayableCharacter ).map( personaje => personaje.role.displayName ) )]
                
            }
            )
            .catch( err => console.log( err ) )
    },
   
    /* methods: {
        // aca van las funciones
        filtro(){
            let filtradoBusqueda = this.personajes.filter(personaje => personaje.displayName.toLowerCase().includes( this.valorBusqueda.toLowerCase() ) )
            let filtradoCheck = filtradoBusqueda.filter( personaje => this.checked.includes( personaje.role.displayName ) || this.checked.length == 0 )
            this.personajesFiltrados = filtradoCheck
        },
    }, */
    computed : {
        filtro(){
            let filtradoBusqueda = this.personajes.filter( personaje => personaje.displayName.toLowerCase().includes( this.valorBusqueda.toLowerCase() ) )
            let filtradoCheck = filtradoBusqueda.filter( personaje => this.checked.includes( personaje.role.displayName ) || this.checked.length == 0 )
            this.personajesFiltrados = filtradoCheck
            console.log( 'hola' )
        },
    }
    
})

app.mount('#app')







