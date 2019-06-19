let controller = {}

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('recipes.sqlite')

/**
 * Adds ingredients to table ingredients
 * 
 * @param {object} req HTTP request object
 * @callback err 
 */
controller.addIngredients = (req, callback) => {
    for (i = 0; i < Object.keys(req.body).length; i++) {
        //console.log(req.body[i].name)
        db.all("INSERT INTO ingredients(name) VALUES($name)", {
            $name: req.body[i].name
        }, (err) => {
            return callback(err)
        })
    } callback(null)
}

module.exports = controller