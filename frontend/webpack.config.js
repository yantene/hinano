const path = require("path");
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(pathToPhaser, "dist/phaser.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/game.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
      },
      {
        test: /phaser\.js$/,
        loader: "expose-loader",
        options: { exposes: { globalName: "Phaser", override: true } },
      },
      {
        test: /\.pug$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, "src"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "./assets",
        }
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    publicPath: "/dist/",
    host: "127.0.0.1",
    port: 8080,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      phaser: phaser,
    },
  },
  performance: {
    hints: false,
  },
};
