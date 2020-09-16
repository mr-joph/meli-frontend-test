const fs = require("fs");
const path = require("path");

const normalizedPath = path.join(__dirname, ".");

/** Wrapping all files inside this folder in one export module */
fs.readdirSync(normalizedPath).forEach(function (file) {
  if (file === 'index.js') return;
  const exportKey = path.basename(file, ".js");
  const filePath = path.join(__dirname, file);

  module.exports[exportKey] = require(filePath);
});
