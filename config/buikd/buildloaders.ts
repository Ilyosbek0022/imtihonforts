import webpack from 'webpack'
export default function BuildLoaders():webpack.RuleSetRule[]{
    return[
        
       {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
}