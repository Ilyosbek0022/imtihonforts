import path from "node:path";
import webpack from "webpack"
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


export default  function BuildPLugins():webpack.WebpackPluginInstance[]{
    
return[
    
      new HtmlWebpackPlugin({
        context:path.resolve(__dirname,"src"),
      template:"./index.html"
    }),
    
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

]
}