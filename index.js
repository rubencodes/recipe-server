import express from "express";

import {
    getRecipe,
    getRecipes,
    getIngredients,
    searchRecipes,
    searchIngredients,
} from "./data_fetchers.js";
import { ERROR_STATUS, ERROR_TYPE } from "./errors.js";

const app = express();
const port = 3000;

app.get('/recipes', (req, res) => {
    res.json({
        recipes: getRecipes()
    });
});

app.get('/recipes/:id', (req, res) => {
    const recipe = getRecipe(req.params.id);
    if (!recipe) {
        res
            .status(ERROR_STATUS[ERROR_TYPE.invalidId])
            .json({ error: ERROR_TYPE.invalidId });
        return;
    }

    res.json({
        recipe: recipe,
    });
});

app.get('/ingredients', (req, res) => {
    res.json({
        ingredients: getIngredients()
    });
});

app.get('/ingredients/:id', (req, res) => {
    res.json({
        recipes: getRecipes({
            ingredient: req.params.id
        })
    });
});

app.get('/search', (req, res) => {
    res.json({
        recipes: searchRecipes(req.query.query),
        ingredients: searchIngredients(req.query.query)
    });
});

app.get('*', function(req, res){
    res
        .status(ERROR_STATUS[ERROR_TYPE.notFound])
        .json({ error: ERROR_TYPE.notFound });
});

app.listen(port, () => {
    console.log(`Recipe Server listening at http://localhost:${port}`)
});