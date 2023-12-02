import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getLoadingUser, getUser } from "../../../store/user.slicer";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoading = useSelector(getLoadingUser());
  const currentUser = useSelector(getUser());
  return (
    <Route
      {...rest}
      render={props => {
        if (!currentUser && !isLoading) {
          return <Redirect to="/login" />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default ProtectedRoute;
