const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

/**
 * 
 * 
 * @param  server 
 */
module.exports = (server) => {
  server.use(morgan("dev"));
  server.use(bodyParser.json());
  server.use(express.static("static"));
}
