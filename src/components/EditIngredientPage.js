import React from 'react';
import {connect} from 'react-redux';
import IngredientForm from './IngredientForm';
import {startEditIngredient, startRemoveIngredient} from '../actions/ingredients';

export class EditIngredientPage extends React.Component {
    onSubmit = (ingredient) => {
        this.props.onSubmit(this.props.ingredient.id, ingredient);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.onClick({id: this.props.ingredient.id});
        this.props.history.push('/');
    };

    render() {
        console.log(this.props);
        
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Ingredient</h1>
                    </div>
                </div>
                    <div className='content-container'>
                        <IngredientForm ingredient={this.props.ingredient} 
                                 onSubmit={this.onSubmit} />
                        <button className='button button--secondary' onClick={this.onClick}>Remove Ingredient</button>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        ingredient: state.ingredients.find((ingredient)=> ingredient.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, ingredient) => dispatch(startEditIngredient(id, ingredient)),
        onClick: (data) => dispatch(startRemoveIngredient(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditIngredientPage);