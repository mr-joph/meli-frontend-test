const dotenv = require("dotenv");
const nextConfig = require("../next.config");
const fs = require("fs");

/** general project configuration */
const { SERVER_PORT, EXTERNAL_API } = dotenv.parse(fs.readFileSync(".env.local"));
const {
  NODE_ENV,
} = process.env;

exports.server = {
  EXTERNAL_API,
  PORT: SERVER_PORT,
};

/** Next.js build configuration */
exports.next = {
  dev: NODE_ENV !== "production",
  conf: nextConfig,
};
