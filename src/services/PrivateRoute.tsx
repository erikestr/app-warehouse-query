import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn }: any = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;