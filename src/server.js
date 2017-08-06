import React from "react";
import Express from "express";
import Fs from "fs";
import Path from "path";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";

import App from "./app";

const Application = App(StaticRouter);
const server = Express();

function serverHandle(request, response) {
  const indexHTMLpath = Path.join(__dirname, "../build/index.html");
  Fs.readFile(indexHTMLpath, "utf8", (err, content) => {
    if (err) {
      response.write("Oops");
      response.end();
      return;
    }

    const renderedApp = renderToString(<Application location={request.url} />);
    response.write(content.replace("%HTML%", renderedApp));
    response.end();
  });
}

server.get("/", serverHandle);
server.use(Express.static(Path.join(__dirname, "../build")));
server.get("*", serverHandle);

server.listen(process.env.PORT || 5050);
