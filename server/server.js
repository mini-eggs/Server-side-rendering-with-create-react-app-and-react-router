"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleServer(request, response) {
  var Application = (0, _app2.default)(_reactRouter.StaticRouter);
  var renderedApp = (0, _server.renderToString)(_react2.default.createElement(Application, { url: request.url }));
  var indexHtml = _path2.default.join(__dirname, "../build/index.html");

  _fs2.default.readFile(indexHtml, "utf8", function (err, html) {
    if (err) {
      response.write("Oops");
      response.end();
      return;
    }

    var nextHTML = html.replace("%HTML%", renderedApp);
    response.write(nextHTML);
    response.end();
  });
}

var server = (0, _express2.default)();
server.get("/", handleServer);
server.use(_express2.default.static(_path2.default.join(__dirname, "../build")));
server.get("*", handleServer);
server.listen(process.env.PORT || 3000);