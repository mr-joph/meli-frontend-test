const express = require("express");
const next = require("next");
const config = require("./config");
const middlewares = require("./middlewares");

const serverPort = config.server.port;
const nextBuild = next(config.next);

nextBuild
.prepare()
.then(() => {
  const server = express();
  const handle = nextBuild.getRequestHandler();

  middlewares(server);

  server.get("/api", (req, res) => {
    return res.json({ value: "test" });
  });

  server.get("/api/items", (req, res) => {
    return res.json({ value: "other test" });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(serverPort, err => {
    if(err) throw err;

    console.info(`Server running on port ${serverPort}`);
  });

})
.catch(err => {
  console.error(err);
  process.exit(1);
});
