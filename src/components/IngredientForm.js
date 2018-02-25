import React from 'react';


export default class IngredientForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: props.ingredient ? props.ingredient.name : '',
            error: ''
        }
    } 

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(()=>({
            name: name
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name) {
            const error = 'Please enter the name';
            this.setState(()=>({error: error}));
        } else {
            this.props.onSubmit({
                name: this.state.name
            });
            this.setState(()=>({error: ''}));
        }
    };

    render() {
        return (
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input className='text-input' type='text' placeholder='Ingredient name' 
                            autoFocus value={this.state.name} onChange={this.onNameChange}/>
                    <div>
                         <button className='button'>Add expense</button>
                    </div>
                </form>
        );
    };
};