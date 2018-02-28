import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';


export class RecipesPage extends React.Component{
    
    render() {
        const recipes = this.props.recipes;
        console.log(recipes);
        
        return (
            <div className='main-content'>
                <div className='page-header'>
                    <div className='content-container'>
                        {recipes.length === 0 ? <p className='error-tag'>No recipes found, change ingredients!</p>:<Link className='button button--back' to='/dashboard' >Back to the pantry</Link>}
                        <div className='cards__keeper'>
                            { 
                                recipes.length !== 0 ? 
                                    recipes.map((recipeItem, index)=>{
                                        return <RecipeItem key={index} label={recipeItem.recipe.label} url={recipeItem.recipe.url} ingredients={recipeItem.recipe.ingredientLines} image={recipeItem.recipe.image} />;
                                    }) : null
                            } 
                        </div>
                    </div>
                </div> 
            </div>  
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        recipes: state.recipes
    };
};

const ConnectedRecipes = connect(mapStateToProps)(RecipesPage);
export default ConnectedRecipes;