"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require("react-router-dom");

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = (0, _app2.default)(_reactRouterDom.BrowserRouter);
_reactDom2.default.render(_react2.default.createElement(Application, null), document.getElementById("root"));