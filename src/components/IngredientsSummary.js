import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startSetRecipes} from '../actions/recipes';


export class IngredientsSummary extends React.Component {

    onClick = () => {
        this.props.onClick();
    };

    render () {
        return (
            <div className='page-header'>
                <div className='content-container'>
                    <div className='page-header__actions'>
                        {this.props.ingredients.length===0 ? (<p className='error-tag'>No ingredients, nothing to cook, sorry</p>):(
                        <div>
                                <Link className='button' to='/recipes' onClick={this.onClick}>Start Recipe Search</Link>
                                <p>Search for a recipe</p>
                        </div>  
                        )}
                        { this.props.recipes.length!==0?<Link className='button button--back' to='/recipes'>Back to recipes</Link>: null}
                        <Link className='button' to='/create'>Add Ingredient</Link>
                    </div>
                </div>
            </div>    
        );
    }
};
   

const mapStateToProps = (state, props) => {
    return {
        ingredients: state.ingredients,
        recipes: state.recipes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(startSetRecipes())
    };
};

const ConnectedSummary = connect(mapStateToProps, mapDispatchToProps)(IngredientsSummary);
export default ConnectedSummary;