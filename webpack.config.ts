import BuildPLugins from "./config/buikd/buildplugins";
import { buildResolve } from "./config/buikd/buildresolve";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const isProd = process.env.NODE_ENV==="production"
const isDev=!isProd
module.exports = {
   
  context:path.resolve(__dirname,"src"),
entry: './index.tsx',
  mode:"development",


  resolve: buildResolve(),


  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
     clean: true,
  },
 
  devServer:{
port:5090,
hot:true,
 static: {
    directory: path.resolve(__dirname, 'public'),
  },
  },
   plugins:BuildPLugins(),
   module: {rules:[
     {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
       {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
}

   ],}
   

};