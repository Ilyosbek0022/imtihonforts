import path from "node:path";

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


export default  function BuildPLugins(){
    
return[
    
      new HtmlWebpackPlugin({
        context:path.resolve(__dirname,"src"),
      template:"./index.html",
       favicon: path.resolve(__dirname, "src", "razer.svg")
    }),
    
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

]
}