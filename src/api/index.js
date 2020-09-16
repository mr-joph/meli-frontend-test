const endpoints = require("./endpoints");

/** Applying all api routes dynamically */
module.exports = function(server) {
  for(key in endpoints) {
    const route = endpoints[key];
    /** now the server is ready to go! */
    server.use("/api", route);
  }
};
