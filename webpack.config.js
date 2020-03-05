/**
 ==============================
    使用 example/src/index.js 作为项目入口，处理资源文件的依赖关系
    通过 babel-loader 来编译处理 js 和 jsx 文件
    通过 html-webpack-plugin 自动注入编译打包好的脚本文件
    为 demo 启动端口为 3001 的服务
 ==============================
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./example/src/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: path.join(__dirname, "./example/src/app.js"),
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: '[name]_[local]_[hash:base64:5]',
          }
        }
      }, {
        loader: "less-loader"
      }]
    }]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
};