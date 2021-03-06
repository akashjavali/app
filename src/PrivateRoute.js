import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
	// console.log(localStorage.getItem('access_token'))
    <Route {...rest} render={props => (
        localStorage.getItem('access_token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)