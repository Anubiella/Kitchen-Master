import React from 'react';
import {connect} from 'react-redux';
import IngredientForm from './IngredientForm';
import {startAddIngredient} from '../actions/ingredients';


export class AddIngredientPage extends React.Component {
    onSubmit = (ingredient) => {
        this.props.onSubmit(ingredient);
        this.props.history.push('/');
    };

    render () {
        return (
            <div className='main-content'>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Add ingredient</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <IngredientForm onSubmit={this.onSubmit}/>
                </div>   
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({onSubmit: (ingredient) => dispatch(startAddIngredient(ingredient))});

export default connect(undefined, mapDispatchToProps)(AddIngredientPage);