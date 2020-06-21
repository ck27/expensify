const path = require('path');

const outputPath = path.join(__dirname,"public");

module.exports = {
    entry: "./src/playground/redux-expensify.js",
    output : {
        path: outputPath,
        filename: "app.bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.join(__dirname, '/node_modules'),
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: outputPath,
        historyApiFallback: true
    },
};