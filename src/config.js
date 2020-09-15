const dotenv = require("dotenv");
const nextConfig = require("../next.config");
const fs = require("fs");

const { SERVER_PORT } = dotenv.parse(fs.readFileSync(".env.local"));
const {
  NODE_ENV,
} = process.env;

exports.server = {
  port: SERVER_PORT,
};

exports.next = {
  dev: NODE_ENV !== "production",
  conf: nextConfig,
};
