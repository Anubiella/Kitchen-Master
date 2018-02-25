import uuid from 'uuid';
import database from '../firebase/firebase';


export const addIngredient = (ingredient) => ({
    type: 'ADD_INGREDIENT',
    ingredient
});

export const startAddIngredient = (ingredientData={}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {name=''} = ingredientData;
        const ingredient = {name};
        
        return database.ref('/users/'+uid+'/ingredients').push(ingredient).then((ref)=>{
            dispatch(addIngredient({
                id: ref.key,
                ...ingredient
            }));
        });
    };
};

export const removeIngredient = ({id}={}) => ({
    type: 'REMOVE_INGREDIENT',
    id
});

export const startRemoveIngredient = ({id}={}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref('users/'+uid+'/ingredients/'+id).remove().then(()=>{
            dispatch(removeIngredient({ id }));
        });
    };
};

export const editIngredient = (id, updates) => ({
    type: 'EDIT_INGREDIENT',
    id, 
    updates
});

export const startEditIngredient = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;  
        return database.ref('users/'+uid+'/ingredients/'+id).update(updates).then(()=>{
            dispatch(editIngredient(id, updates));
        });
    };
};

export const setIngredients = (ingredients) => ({
    type: 'SET_INGREDIENTS',
    ingredients
});

export const startSetIngredients = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref('users/'+uid+'/ingredients').once('value')
        .then((snapshot)=>{
            const ingredients = [];
            
            snapshot.forEach((childSnapshot) => {
                ingredients.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            dispatch(setIngredients(ingredients));   
        });
    };
};
