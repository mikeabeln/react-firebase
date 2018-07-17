const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './client/index.jsx'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'server/public')
    },
    module: {
        rules: [
            {
                // transpile + bundle react scripts
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
            	// load and bundle images
            	 test: /\.(png|svg|jpg|gif|ico)$/,
            	 use: [{
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
                        outputPath: 'fonts'
                    }
                }]
            },
            {
            	// parse csv to JSON
            	   test: /\.(csv|tsv)$/,
            	   use: ['csv-loader']
            },
            {
            	// parse xml to JSON
            	   test: /\.xml$/,
            	   use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            favicon: './client/favicon.ico',
            inject: true,
            hash: true
        }),
        new webpack.NamedModulesPlugin()
    ]
}
