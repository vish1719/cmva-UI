import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('blogAuthToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/blog/login" />
      )
    }
  />
);

export default AuthRoute;