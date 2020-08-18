const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        watchContentBase: true,
        publicPath: '/',
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        inline: true
    },
    optimization: {
        usedExports: true
    }
});
