import BuildPLugins from "./config/build/buildplugins";
import { buildResolve } from "./config/build/buildresolve";

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
     
  },
 
  devServer:{
port:5090,
hot:true,
historyApiFallback:true,
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
        use: ["style-loader", "css-loader","postcss-loader"],
      },
    

   ],}
   

};