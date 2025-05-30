/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('blogAuthToken'); // ✅ Check token from localStorage
  console.log("AuthRoute: token is", token); // 🔍 Debug line
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/blog/login" />
        )
      }
    />
  );
};

export default AuthRoute;
