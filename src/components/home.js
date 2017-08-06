import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function HomeComponent({ name }) {
  return (
    <div>
      <Link to="/other">Other</Link>
      <h1>Home</h1>
      <h2>
        Hello, my name is {name}
      </h2>
    </div>
  );
}

function mapState({ ExampleReducer }) {
  return {
    name: ExampleReducer.name
  };
}

export default connect(mapState)(HomeComponent);
