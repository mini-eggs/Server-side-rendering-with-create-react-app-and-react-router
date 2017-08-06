"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

require("./styles/main.css");

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = (0, _App2.default)(_reactRouterDom.BrowserRouter);
(0, _reactDom.render)(_react2.default.createElement(Application, null), document.getElementById("root"));