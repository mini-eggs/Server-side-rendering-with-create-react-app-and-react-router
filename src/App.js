import React from "react";

import ReduxStore from "./store";
import Routes from "./routes";

export default function(Router) {
  return function({ url }) {
    return (
      <ReduxStore>
        <Router location={url} context={{}}>
          <div>
            {Routes}
          </div>
        </Router>
      </ReduxStore>
    );
  };
}
