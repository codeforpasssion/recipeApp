const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    bail: true,
    mode : 'development',
    entry : './src/index.js',
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules : [{
            test : /\.css/,
            use :['style-loader','css-loader']
         },
            {
            test : /\.js$/,
            use : ['babel-loader']
        },
        {
             test : /\.(png|jpe?g|gif)$/i,
             use : ['file-loader']
         }]
    },
    plugins : [new CleanWebpackPlugin(),new htmlWebpackPlugin({
        template : './src/index.html'
    }),
    ],
    devServer : {
        contentBase : path.join(__dirname,'dist'),
        port : 9000 ,
        compress : true,
        hot: true,
        open: true,
        writeToDisk: true,
    }
}