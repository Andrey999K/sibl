import React from "react";
import ProtectedRoute from "../components/common/ProtectedRoute";
import { Switch } from "react-router-dom";

const getProtectedRoutes = (routes, attr) => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        return (
          <ProtectedRoute
            {...prop}
            key={key}
          />
        );
      })}
    </Switch>
  );
};

export default getProtectedRoutes;
