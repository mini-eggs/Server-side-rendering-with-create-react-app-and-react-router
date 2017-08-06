"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeComponent(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/other" },
      "Other"
    ),
    _react2.default.createElement(
      "h1",
      null,
      "Home"
    ),
    _react2.default.createElement(
      "h2",
      null,
      "Hello, my name is ",
      name
    )
  );
}

function mapState(_ref2) {
  var ExampleReducer = _ref2.ExampleReducer;

  return {
    name: ExampleReducer.name
  };
}

exports.default = (0, _reactRedux.connect)(mapState)(HomeComponent);