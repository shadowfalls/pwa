const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    entry: './src/index.js',
    output: {
        filename: "[name].[hash].bundle.js",
        path: __dirname + "/dist"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.DefinePlugin(envKeys),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // remove this during production
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: './',
    //     hot: true,
    //     port: process.env.PORT
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT
    },
    devtool: 'source-map'
};