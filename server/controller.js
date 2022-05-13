let fruits = require('./db.json')
let globalID = 8

module.exports = {
    getFruits: (req,res) => {
        res.status(200).send(fruits)
    },
    deleteFruits: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        fruits.splice(index, 1)
        res.status(200).send(fruits)
    },
    createFruit: (req, res) => {
        const {fruit, rating, imageURL} = req.body
        let newFruit = {
            id: globalID,
            fruit,
            rating,
            imageURL
        }
        fruits.push(newFruit)
        globalID++
        res.status(200).send(fruits)
    },
    updateFruit: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        let index = fruits.findIndex(elem => +elem.id === +id)
        console.log(type)
        if (type === 'minus' && fruits[index].rating > 0) {
            fruits[index].rating -= 1
            res.status(200).send(fruits)
        } else if (type === 'plus' && fruits[index].rating < 5) {
            fruits[index].rating += 1
            res.status(200).send(fruits)
        } else {
            res.status(400).send('... No ...')
        }
    }
}