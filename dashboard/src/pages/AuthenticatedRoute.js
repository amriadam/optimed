import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const RouteAuthenticated = ({ component, path }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("user") != null) setIsAuthenticated(true);
  }, []);
  if (!isAuthenticated) {
    return <Redirect to="/sign-in" />;
  }

  return <Route component={component} path={path} />;
};

export default RouteAuthenticated;
