var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HasteResolverPlugin = require('haste-resolver-webpack-plugin');


var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            // 'react-native': 'react-native-web',
            'react-native':path.resolve(__dirname, 'app/components/react-native-web'),
        },
        extensions: ['.web.js', '.js'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            // LESS
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            // SASS
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
    ]
};

