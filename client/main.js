const fruits = document.querySelector('#devil-fruit')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/fruits`

const fruitCallback = ({ data: fruits }) => displayWater(fruits)
const errCallback = err => console.log(err.response.data)

const getAllFruits = () => axios.get(baseURL).then(fruitsCallback).catch(errCallback)
const createfruits = body => axios.post(baseURL, body).then(fruitsCallback).catch(errCallback)
const deletefruits = id => axios.delete(`${baseURL}/${id}`).then(fruitsCallback).catch(errCallback)
const updatefruits = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(fruitsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createWater(bodyObj)

    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createWaterCard(fruits) {
    const fruitsCard = document.createElement('div')
    fruitsCard.classList.add('fruits-card')

    waterCard.innerHTML = `<img alt='water cover' src=${water.imageURL} class="devil-fruit"/>
    <p class="water-title">${water.title}</p>
    <div class="btns-container">
        <button onclick="updateWater(${fruits.id}, 'minus')">-</button>
        <p class="water-rating">${fruits.rating} stars</p>
        <button onclick="updateWater(${fruits.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteWater(${fruits.id})">delete</button>
    `


    waterBottle.appendChild(devilFruits)
}

function displayFruits(arr) {
    console.log(arr)
    waterBottle.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createWaterCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllWater()