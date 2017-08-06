"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Router) {
  return function (_ref) {
    var url = _ref.url;

    return _react2.default.createElement(
      _store2.default,
      null,
      _react2.default.createElement(
        Router,
        { location: url, context: {} },
        _react2.default.createElement(
          "div",
          null,
          _routes2.default
        )
      )
    );
  };
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }