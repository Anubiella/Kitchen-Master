import React from 'react';
import IngredientsList from './IngredientsList';
import IngredientsSummary from './IngredientsSummary';

const DashboardPage = () => (
    <div>
        <IngredientsSummary />
        <IngredientsList />
    </div>
);



export default DashboardPage;