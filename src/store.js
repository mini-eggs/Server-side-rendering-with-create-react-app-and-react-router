import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

function ExampleReducer(state = { name: "Evan" }, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

function getPreloadedState() {
  if (typeof module !== "undefined" && module.exports) {
    return {};
  } else {
    return window.__INITIAL_STATE__;
  }
}

const preloadedState = getPreloadedState();
const reducers = combineReducers({ ExampleReducer });
export const store = createStore(reducers, preloadedState);

export default function({ children }) {
  return <Provider store={store} children={children} />;
}
