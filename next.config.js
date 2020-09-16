const path = require("path");

/** 
 * Default Config for Next.js
 * values for development as well as production env
 **/
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
  },
  distDir: "dist",
};
