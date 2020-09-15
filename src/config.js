const path = require("path");
const nextConfig = require("../next.config");

exports.server = {

};

exports.next = {
  dev: process.env.NODE_ENV !== "production",
  // dir: path.resolve(__dirname, "src"),
  conf: nextConfig,
};
