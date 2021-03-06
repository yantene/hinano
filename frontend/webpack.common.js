const path = require("path");
const pathToPhaser = path.join(__dirname, "./node_modules/phaser/");
const phaser = path.join(pathToPhaser, "dist/phaser.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    game: path.resolve(__dirname, "./game.ts"),
    style: path.resolve(__dirname, "./style.sass"),
  },
  output: {
    path: path.resolve(__dirname, "../dist/public"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: __dirname,
        loader: "ts-loader",
      },
      {
        test: /phaser\.js$/,
        loader: "expose-loader",
        options: { exposes: { globalName: "Phaser", override: true } },
      },
      {
        test: /\.pug$/,
        include: __dirname,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, ".."),
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2, // postcss-loader, sass-loader
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.pug",
      chunks: ["game"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./assets",
          to: "./assets",
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
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
