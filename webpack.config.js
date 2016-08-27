var path = require('path');
var webpack = require("webpack")

module.exports = {
    //entry: path.resolve(__dirname, './app/Main.js'),
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/Main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.(png|jpg)$/,
                //loader: 'url?limit=25000',
                //loader: 'url?limit=25000&name=img/[name].[ext]'
                loader: "file-loader?name=img/[hash:8].[name].[ext]"
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};