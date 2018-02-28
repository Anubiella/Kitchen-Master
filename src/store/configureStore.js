import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ingredientsReducer from '../reducers/ingredients';
import authReducer from '../reducers/auth';
import recipesReducer from '../reducers/recipes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            ingredients: ingredientsReducer,
            auth: authReducer,
            recipes: recipesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};