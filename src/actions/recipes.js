import axios from 'axios';

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

export const setRecipes = (recipes) => ({
    type: 'SET_RECIPES',
    recipes
});

export const startSetRecipes = () => {
    return (dispatch, getState) => {
        const ingredients = getState().ingredients.map((ingredient)=>{
            return ingredient.name.toLowerCase();
        });
        
        const ingrList = ingredients.join();
        const query = 'https://api.edamam.com/search?q='+ingrList+'&app_id='+APP_ID+'&app_key='+APP_KEY;

        return axios.get(query)
        .then(response=>{
            const recipes = response.data.hits;
            dispatch(setRecipes(recipes));
        }).catch(error=>{
            console.log(error);
        });
    };
};
