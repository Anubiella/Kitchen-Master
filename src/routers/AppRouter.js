import React from 'react';
import {Router, Link, NavLink, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import AddIngredientPage from '../components/AddIngredientPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import EditIngredientPage from '../components/EditIngredientPage';
import RecipesPage from '../components/RecipesPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact/>
            <PrivateRoute path='/dashboard' component={DashboardPage} />
            <PrivateRoute path='/create' component={AddIngredientPage} />
            <PrivateRoute path='/edit/:id' component={EditIngredientPage} />
            <PrivateRoute path='/recipes' component={RecipesPage} />
            <Route component={NotFoundPage}/>
        </Switch> 
    </div>
</Router>
);

export default AppRouter;