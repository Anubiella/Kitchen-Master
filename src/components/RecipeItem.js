import React from 'react';
import Collapsible from 'react-collapsible';

class RecipeItem extends React.Component {
    
    render() {
        const ingredients = this.props.ingredients;
        const ingrList = (
            <ul>
                {ingredients.map((ingredient, index)=>{
                    return (
                        <li key={index}>{ingredient}</li>
                    );
                })}
            </ul>
        );

        return (
            <div className="card">
                <div className='card__image'>
                    <img src={this.props.image} alt={this.props.label} />
                    <div className="middle"><a href={this.props.url} target='_blank'>Recipe</a></div>
                </div>
                <div className="card__container">
                    <h4><b>{this.props.label}</b></h4>
                    <i className="fas fa-arrows-alt-v"></i>
                    <Collapsible className='card__collapse' trigger="Ingredients">
                        {ingrList}
                    </Collapsible>
                </div>
             </div>
        );
    };
};

export default RecipeItem;