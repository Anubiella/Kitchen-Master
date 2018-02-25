import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



export const IngredientsSummary = (props) => (
    <div className='page-header'>
        <div className='content-container'>
            <div className='page-header__actions'>
                {props.ingredients.length===0 ? <p>0 ingredients, nothing to cook, sorry</p>:<p>When you're ready, search for a recipe</p>}
                <Link className='button' to='/create'>Add Ingredient</Link>
            </div>
        </div>
    </div>    
);

const mapStateToProps = (state, props) => {
    return {
        ingredients: state.ingredients
    };
};


const ConnectedSummary = connect(mapStateToProps)(IngredientsSummary);
export default ConnectedSummary;