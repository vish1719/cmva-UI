/* eslint-disable */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/authcontext';
 // ✅ Import context

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // ✅ Get auth status from context

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/blog/login" />
        )
      }
    />
  );
};

export default AuthRoute;
