import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Lunettes from "./pages/Lunettes";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import Lentilles from "./pages/Lentilles";
import Cms from "./pages/Cms";

import Rtl from "./pages/Rtl";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useState } from "react";
import { useEffect } from "react";
import RouteAuthenticated from "../src/pages/AuthenticatedRoute";
import RouteUnauthenticated from "../src/pages/UnAuthenticatedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const fallbackUri = `${isAuthenticated ? "/dashboard" : "/sign-in"}`;
  useEffect(() => {
    if (localStorage.getItem("user") != null) setIsAuthenticated(true);
  }, []);
  return (
    <div className="App">
      <Switch>
        <RouteUnauthenticated path="/sign-in" component={SignIn} />
        <Main>
          <RouteAuthenticated path="/Lentilles" component={Lentilles} />

          <RouteAuthenticated path="/dashboard" component={Home} />
          <RouteAuthenticated path="/profile" component={Profile} />

          <RouteAuthenticated path="/Lunettes" component={Lunettes} />
          <RouteAuthenticated path="/cms" component={Cms} />

          <RouteAuthenticated path="/billing" component={Billing} />
          <RouteAuthenticated path="/rtl" component={Rtl} />
          <Redirect to={fallbackUri} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
