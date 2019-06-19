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
            if (err) {
                return callback(err)
            } else {
                if (i == Object.keys(req.body).length) {
                    callback(null)
                }
            }
        })
    }
}

controller.updateIngredients = (req, callback) => {
    for (i = 0; i < Object.keys(req.body).length; i++) {
        db.all("UPDATE ingredients SET name = $name WHERE id = $id", {
            $name: req.body[i].name,
            $id: req.body[i].id
        }, (err) => {
            if (err) {
                return callback(err)
            } else {
                if (i == Object.keys(req.body).length) {
                    callback(null)
                }
            }
        })
    }
}

controller.deleteIngredients = (req, callback) => {
    for (i = 0; i < Object.keys(req.body).length; i++) {
        db.all("DELETE FROM ingredients WHERE id = $id", {
            $id: req.body[i].id
        }, (err) => {
            if (err) {
                return callback(err)
            } else {
                if (i == Object.keys(req.body).length) {
                    callback(null)
                }
            }
        })
    }
}

controller.getIngredients = (req, callback) => {
    db.all("SELECT * FROM ingredients", (err, rows) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, rows)
        }
    })
}
module.exports = controller