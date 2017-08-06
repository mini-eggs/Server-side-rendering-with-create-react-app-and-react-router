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

const reducers = combineReducers({ ExampleReducer });
const store = createStore(reducers);

export default function({ children }) {
  return <Provider store={store} children={children} />;
}
