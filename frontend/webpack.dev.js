const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    port: 8080,
    contentBase: path.resolve(__dirname, "../dist/public")
  }
});
