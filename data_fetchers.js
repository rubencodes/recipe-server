import { RECIPES } from "./data.js";
import { upperCaseFirstLetter, sanitizeQuery } from "./utilities.js";

export function getRecipe(recipeId) {
    return RECIPES[recipeId];
}

export function getRecipes({ ingredient } = {}) {
    return Object.keys(RECIPES)
        .filter((recipeId) => !ingredient || RECIPES[recipeId].ingredients.some(({ id }) => id === ingredient))
        .map((recipeId) => ({ id: recipeId, name: RECIPES[recipeId].name }))
}

export function getIngredients() {
    return Object.values(RECIPES)
        .map((recipe) => recipe.ingredients)
        .reduce((soFar, ingredients) => [...soFar, ...ingredients], [])
        .filter(({ id }, index, array) => array.findIndex((ingredient) => ingredient.id === id) === index)
        .map((ingredient) => ({ id: ingredient.id, name: upperCaseFirstLetter(ingredient.name) }));
}

export function searchRecipes(rawQuery = "") {
    const allRecipes = getRecipes();
    const query = sanitizeQuery(rawQuery);
    if (!query) return [];

    return allRecipes
        .filter(({ name }) => name.toLowerCase().includes(query));
}

export function searchIngredients(rawQuery = "") {
    const allIngredients = getIngredients();
    const query = sanitizeQuery(rawQuery);
    if (!query) return [];

    return allIngredients
        .filter(({ name }) => name.toLowerCase().includes(query));
}