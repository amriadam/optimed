import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const RouteUnauthenticated = ({ component, path }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user") != null) setIsAuthenticated(true);
  }, []);
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <Route component={component} path={path} />;
};

export default RouteUnauthenticated;
