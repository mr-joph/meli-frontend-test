const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  basePath: "",
  assetPrefix: "",
  distDir: "dist",
};
