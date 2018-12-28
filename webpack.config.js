const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
            
       ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 8000,
        watchContentBase: true,
    },
    watch: true
};