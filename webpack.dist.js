const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                // bundle css+scss files to one extracted css file for production
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})
