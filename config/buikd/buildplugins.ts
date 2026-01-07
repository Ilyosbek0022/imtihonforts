import path from "node:path";
import webpack from "webpack";
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import CopyPlugin from "copy-webpack-plugin";
export default function BuildPLugins(): webpack.WebpackPluginInstance[] {
  return [
  
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), 
      filename: "index.html",
    }),



    new CleanWebpackPlugin(),

  new CopyPlugin({
  patterns: [
    { from: path.resolve(__dirname, "../public"), to: "." } 
  ]
}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
  ];
}
