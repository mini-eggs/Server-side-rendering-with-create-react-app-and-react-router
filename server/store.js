"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var children = _ref.children;

  return _react2.default.createElement(_reactRedux.Provider, { store: store, children: children });
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExampleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: "Evan" };
  var action = arguments[1];

  switch (action.type) {
    default:
      {
        return state;
      }
  }
}

var reducers = (0, _redux.combineReducers)({ ExampleReducer: ExampleReducer });
var store = (0, _redux.createStore)(reducers);