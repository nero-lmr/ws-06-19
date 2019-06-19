let controller = {}
// Database
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('recipes.sqlite')

/**
 * Adds elements to table recipes
 * 
 * @param {object} req http request object
 * @callback err 
 */
controller.addRecipe = (req, callback) => {
    db.all(`INSERT INTO recipes(name, description, minutes_needed)
    VALUES($name, $description, $minutes_needed)`, { // Zeilenumbruch geht nur mit Backticks!!
        $name: req.body.name,
        $description: req.body.description,
        $minutes_needed: req.body.$minutes_needed
    }, (err, rows) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}

controller.updateRecipe = (req, callback) => {
    db.all('UPDATE recipes SET name = $name, description = $description, minutes_needed = $minutes_needed WHERE id = $id', {
        $id: req.body.id,
        $name: req.body.name,
        $description: req.body.description,
        $minutes_needed: req.body.minutes_needed
    }, (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}

controller.deleteRecipe = (req, callback) => {
    db.all("DELETE FROM recipes WHERE id = $id", {
        $id: req.query.id
    }, (err) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}

controller.getRecipe = (req, callback) => {
    db.all("SELECT * FROM recipes", (err, rows) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, rows)
        }
    })
}

module.exports = controller