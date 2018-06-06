const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
     rules:[
          {
            // transpile + bundle react scripts
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            exclude: /node_modules/,
            options: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
                plugins: ['react-hot-loader/babel']
              },
          },
          {
         	   // bundle css+scss files to one extracted css file for production
             test: /\.(css|scss)$/,
             use: ExtractTextPlugin.extract({
                use: [
                  {loader: 'style-loader'}, 
                  {loader: 'css-loader', options:{sourceMap: true}}, 
                  {loader: 'sass-loader', options:{sourceMap: true}}
                ]
            }),
          },
          {
          	// load and bundle images
          	test: /\.(png|svg|jpg|gif|ico)$/,
          	use:[{
              loader: 'file-loader',
              options: {
                name: '[name][hash].[ext]',
                outputPath: 'images/'
              }
            }]
          },
          {
          	// bundle fonts
          	test: /\.(woff|woff2|eot|ttf|otf)$/,
          	use: [{
              loader: 'file-loader',
              options: {
                outputPath: 'styles/fonts'
              }
            }]
          },
          {
          	// parse csv to JSON
          	test: /\.(csv|tsv)$/,
          	use:['csv-loader']
          },
          {
          	// parse xml to JSON
          	test: /\.xml$/,
          	use:['xml-loader']
          }
      ]
   },
   plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      disable: process.env.NODE_ENV != 'production'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};