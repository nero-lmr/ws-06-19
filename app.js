// Express app
const express = require('express')
const app = express()
const port = 3000

// Database
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('recipes.sqlite')

// Middleware for JSON format I/O
app.use(express.json())

// helloworld Get Request
app.get('/helloworld', (req, res) => {
    res.json({
        'hello': 'world'
    })
})

const recipeController = require('./controller/recipes')


app.get('/recipes', (req, res) => {
    recipeController.getRecipe(req, (err, rows) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(rows)
        }
    })
})

app.post('/recipes', (req, res) => {
    recipeController.addRecipe(req, (err) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(201).json({})
        }
    })
})

app.put('/recipes', (req, res) => {
    recipeController.updateRecipe(req, (err) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(201).json({})
        }
    })
})

app.delete('/recipes', (req, res) => {
    recipeController.deleteRecipe(req, (err) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(201).json({})
        }
    })
})

const ingredientController = require('./controller/ingredients')


app.post('/ingredients', (req, res) => {
    ingredientController.addIngredients(req, null)
})


// Starting the server
app.listen(port, () => console.log(`App listening on port ${port}!`))