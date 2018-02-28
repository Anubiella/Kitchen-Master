import React from 'react';
import {connect} from 'react-redux';
import IngredientsListItem from './IngredientsListItem';

export const IngredientsList = (props) => (
    
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>Ingredients</div>
            <div className='show-for-desktop'>Ingredient</div>
        </div>
        <div className='list-body'>
        { 
            props.ingredients.length === 0 ? (
                <div className='list-item list-item--message'>
                    <span>No Ingredients</span>
                </div>
            ) : (
                props.ingredients.map((ingredient)=>{
                    return <IngredientsListItem key={ingredient.id} id={ingredient.id} name={ingredient.name}  />;
                })
            )
        }
        </div>
    </div>
);


const mapStateToProps =  (state, props)=>{
    return {
        ingredients: state.ingredients
    };
};

const ConnectedIngredientsList = connect(mapStateToProps)(IngredientsList);

export default ConnectedIngredientsList;