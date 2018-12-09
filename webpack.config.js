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