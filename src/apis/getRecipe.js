import authHeaders from "./authHeaders"


export default (recipeId) => {
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {headers: authHeaders})
        .then(res => res.json())
}