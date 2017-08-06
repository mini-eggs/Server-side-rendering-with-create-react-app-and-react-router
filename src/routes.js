import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/home";
import Other from "./components/other";

const routes = [
  <Route exact path="/" component={Home} />,
  <Route exact path="/other" component={Other} />
];

function iterateRoutes(singleRoute, key) {
  return React.cloneElement(singleRoute, { key });
}

export default routes.map(iterateRoutes);
