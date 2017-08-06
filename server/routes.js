"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _home = require("./components/home");

var _home2 = _interopRequireDefault(_home);

var _other = require("./components/other");

var _other2 = _interopRequireDefault(_other);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _home2.default }), _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/other", component: _other2.default })];

function iterateRoutes(singleRoute, key) {
  return _react2.default.cloneElement(singleRoute, { key: key });
}

exports.default = routes.map(iterateRoutes);