const express = require("express");
const next = require("next");
const api = require("./api");
const config = require("./config");
const middlewares = require("./middlewares");

const serverPort = config.server.PORT;
const nextBuild = next(config.next);

/** entrypoint to run the whole application */
/** Ready, steady, go!! */
nextBuild
.prepare()
.then(() => {
  const server = express();
  const handle = nextBuild.getRequestHandler();

  middlewares(server);
  api(server);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(serverPort, err => {
    if(err) throw err;

    console.info(`Server running on port ${serverPort}`);
  });

})
.catch(err => {
  console.error("Error Starting the server:\n", err);
  process.exit(1);
});
