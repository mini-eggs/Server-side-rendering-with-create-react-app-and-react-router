import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import Home from "./components/home";
import Other from "./components/other";

function ExampleReducer(state = { name: "Evan" }, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

const reducers = combineReducers({ ExampleReducer });
const store = createStore(reducers);

function App(Router) {
  return function({ location }) {
    return (
      <Provider store={store}>
        <Router location={location} context={{}}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/other" component={Other} />
          </div>
        </Router>
      </Provider>
    );
  };
}

export default App;
