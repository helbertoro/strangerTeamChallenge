const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:  ['babel-polyfill', 
                path.resolve(__dirname+'/src/', 
                'index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env", 
                    "@babel/react",
                    {
                        plugins: [
                          '@babel/plugin-proposal-class-properties' // se agreaga el plugin devido a un error en sintaxis ECSCRIPT 7
                        ]
                    }
                ]
                  }
                }
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader']
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'url-loader',
                    options: {}
                }
            }
        ]
    },
    node: {
        fs: "empty"
     },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ]
}