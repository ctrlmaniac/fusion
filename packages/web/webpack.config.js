const path = require("path");

module.exports = {
  entry: "./ts/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "fusion.js",
    path: path.resolve(__dirname, "dist"),
  },
};
