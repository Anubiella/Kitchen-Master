import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetIngredients } from './actions/ingredients';
import { login, logout } from './actions/auth';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore();
console.log(store.getState());

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx , appRoot);
        hasRendered=true;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let appRoot = document.getElementById('app');

ReactDOM.render(<LoadingPage />, appRoot);


firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetIngredients()).then(()=>{
            renderApp();
            if (history.location.pathname==='/') {
                history.push('/dashboard');
            }  
        });
                    
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});