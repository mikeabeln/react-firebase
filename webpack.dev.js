const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './server/dist',
        hot: true,
        progress: true,
        historyApiFallback: true,
        stats: 'errors-only',
        useLocalIp: true,
        host: '0.0.0.0',
        port: 9000,
        disableHostCheck: true,
        proxy: {
            '/': {
                quiet: false,
                noInfo: false,
                logLevel: 'debug',
                changeOrigin: false,
                stats: { color: true },
                toProxy: true,
                target: 'http://localhost:3000'
            }
        }
    },
    watch: true,
    module: {
        rules: [
            {
                // bundle css+scss files to extracted css files for development
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].[hash].css',
            disable: process.env.NODE_ENV !== 'production'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})
