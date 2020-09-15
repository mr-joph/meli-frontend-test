const endpoints = require("./endpoints");

module.exports = function(server) {
  for(key in endpoints) {
    const route = endpoints[key];

    server.use("/api", route);
  }

};
