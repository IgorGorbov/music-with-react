 import React from 'react';
 import { Route, Redirect } from 'react-router-dom';
 import session from "../../reducers/session";

 const PrivateRoute = ({ component: Component,  user , ...rest }) => (
    <Route {...rest} render={(props) => {
        return user && user.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/user/login',
                state: {from: props.location}
            }}/>
    }} />
);

export default PrivateRoute;
