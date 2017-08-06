import React from "react";
import Fs from "fs";
import Path from "path";
import Express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./app";
import { store } from "./store";

function handleServer(request, response) {
  const Application = App(StaticRouter);
  const renderedApp = renderToString(<Application url={request.url} />);
  const indexHtml = Path.join(__dirname, "../build/index.html");

  Fs.readFile(indexHtml, "utf8", (err, html) => {
    if (err) {
      response.write("Oops");
      response.end();
      return;
    }

    const storeScript = `
      <script>var __INITIAL_STATE__=${JSON.stringify(
        store.getState()
      )};</script>
    `.trim();

    const nextHTML = html.replace("%HTML%", storeScript + renderedApp);
    response.write(nextHTML);
    response.end();
  });
}

const server = Express();
server.get("/", handleServer);
server.use(Express.static(Path.join(__dirname, "../build")));
server.get("*", handleServer);
server.listen(process.env.PORT || 3000);
