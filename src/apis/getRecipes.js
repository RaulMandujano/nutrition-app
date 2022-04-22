import authHeaders from "./authHeaders";

const getRecipes = (params = {}) => {

    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients`
    const keys = Object.keys(params);

    keys.forEach((key, index) => {
        if(index === 0) url += `?${key}=${params[key]}`
        else url += `&${key}=${params[key]}`
    })


    const options = {
        method: 'GET',
        headers: authHeaders
    };

    return fetch(url, options)
        .then(res => res.json())
}

export default getRecipes;