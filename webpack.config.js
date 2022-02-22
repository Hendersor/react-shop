const path = require("path"); //(*1) Este modulo te permite trababar con rutas de archivos y carpetas
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    //(19)
    new HtmlWebpackPlugin({
      //(20)
      template: "./public/index.html", //(22)
      filename: "./index.html", //(23)
    }),
    new MiniCssExtractPlugin({
      //(24)
      filename: "[name].css", //(25)
    }),
  ],
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    // compress: true,
    // port: 3005,
  },
};
