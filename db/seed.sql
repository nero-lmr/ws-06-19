INSERT into recipes(name,description,minutes_needed) VALUES('Lasagne','Leckere hausgemachte Lasagne mit viel Käse.',60)
INSERT into ingredients(name) VALUES('Käse')
INSERT into ingredients(name) VALUES('Hackfleisch')
INSERT into ingredients(name) VALUES('Nudeln')
INSERT into ingredients(name) VALUES('Soße')
INSERT into ingredient_recipes(ingredient_id,recipe_id,am_grams) VALUES(1,1,500)
INSERT into ingredient_recipes(ingredient_id,recipe_id,am_grams) VALUES(2,1,1000)
INSERT into ingredient_recipes(ingredient_id,recipe_id,am_grams) VALUES(3,1,1000)
INSERT into ingredient_recipes(ingredient_id,recipe_id,am_grams) VALUES(4,1,700)