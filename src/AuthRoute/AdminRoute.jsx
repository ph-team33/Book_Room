import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const isAdmin = useSelector((state) => state.auths.isAdmin);
  const isLoggedIn = useSelector((state) => state.auths.isLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/accessDenied",
                state: { from: location },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
