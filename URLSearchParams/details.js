const container = document.getElementById("container")

console.log([document])

const params = new URLSearchParams(location.search)

const id = params.get("id")

//comparar el id que nos trajimos de la url con los id de la data

let person = data.find(element => element._id === id)

function createCard(obj){
    return `<div class="card text-center" style="width: 30rem">
    <div class="card-header">
        ${obj.region}
    </div>
    <div class="card-body">
        <h5 class="card-title">${obj.name}</h5>
        <p class="card-text">${obj.text}
        </p>
    </div>
    <div class="card-footer text-muted">
        ${obj.country ? obj.country : "No country associated"}
    </div>
    `
}

function renderCard(obj, element){
    let template = ""
    template += createCard(obj)
    element.innerHTML = template
}

renderCard(person, container)

// if(condición){
//     esto 
// } else {
//     esto otro
// }

// condición ? esto : sino esto
