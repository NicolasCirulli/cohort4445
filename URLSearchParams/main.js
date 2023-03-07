const container = document.getElementById("container")

function createCard(item) {
    return `<div class="card" style="width: 18rem; height: 11rem">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.text}/p>
                    <a href="./details.html?id=${item._id}&name=${item.name}" class="btn btn-primary">View more</a>
                </div>
            </div>
    `
}

function renderCards(array, element){
    let template = ""
    array.forEach(person => template += createCard(person))
    element.innerHTML = template
}

renderCards(data, container)

console.log([document])