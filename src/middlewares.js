const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const config = require("./config");

/**
 * @description Helper for adding all express middlewares
 * 
 * @param server - express application
 */
module.exports = (server) => {
  if(config.next.dev) {
    // development terminal messages
    server.use(morgan("dev"));
  }

  server.use(bodyParser.json());
  server.use(express.static("static"));
}
