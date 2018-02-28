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
                        {recipes.length !== 0 ? <Link className='button button--back' to='/dashboard' >Back to the pantry</Link>: null}
                        <div className='cards__keeper'>
                            { 
                                recipes.length === 0 ? (
                                    <div className='list-item list-item--message'>
                                        <span className='error-tag'>No recipes found, change ingredients!</span>
                                    </div>
                                ) : (
                                    recipes.map((recipeItem, index)=>{
                                        return <RecipeItem key={index} label={recipeItem.recipe.label} url={recipeItem.recipe.url} ingredients={recipeItem.recipe.ingredientLines} image={recipeItem.recipe.image} />;
                                    })
                                )
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