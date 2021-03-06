 
const path = require ('path')

const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {      
        main : './src/scripts/main.js'       
    },
    output: {
        path:  path.resolve(__dirname, 'source'),
        filename: '[name].bundle.js'
    },
    module: {
        rules:[
            {
                test: require.resolve('./src/scripts/jquery'),
                use: [{
                loader: 'expose-loader',
                options: '$'
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(styl|css)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [{
                    loader: 'css-loader',
                    options: {
                      minimize: true 
                    }
                  },'stylus-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: 'img/[name].[hash:4].[ext]',
                      limit: 1024
                    }
                  }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name : 'fonts/[name].[hash:4].[ext]'
                    }
                }
            }              
        ]
    },        
    plugins: [
        new ExtractTextPlugin('style.min.css'),       
        new CleanPlugin('./source',{
            exclude:  ['images']        
        }),       
        new webpack.optimize.OccurrenceOrderPlugin(),     
        new webpack.optimize.UglifyJsPlugin() 
    ]
 }
