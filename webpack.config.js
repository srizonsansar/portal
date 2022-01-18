const path = require('path');

module.exports = {
    entry: {
        app: './assets/scripts/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/scripts'),
        filename: 'scripts.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
}