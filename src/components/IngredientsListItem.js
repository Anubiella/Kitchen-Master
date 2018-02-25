import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const IngredientsListItem = (props) => (
    <Link className='list-item' to={'/edit/'+props.id}>
        <div>
            <h3 className='list-item__title'>{props.name}</h3>
        </div>
    </Link>
);

export default IngredientsListItem;