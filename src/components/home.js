import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Home({ name }) {
  return (
    <div>
      <Link to="/other">Other</Link>
      <h1>
        Hello World, welcome home, {name}.
      </h1>
    </div>
  );
}

function mapState({ ExampleReducer }) {
  return {
    name: ExampleReducer.name
  };
}

export default connect(mapState)(Home);
