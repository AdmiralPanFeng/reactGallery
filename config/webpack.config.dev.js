var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../build/js'),
        publicPath: '/assets/',
        filename: 'app.js',
        chunkFilename: "[name]-[chunkhash].js",
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }, {
            test: function (path) {
                var reg = /quill\.(core|snow)\.css$/
                return reg.test(path);
            },
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        localIdentName: '[path][name]--[local]--[hash:base64:5]',
                        sourceMap: false
                    }
                }
            ]
        }, {
            test: function (path) {
                return /\.css$/.test(path) && !/quill\.(core|snow)\.css$/.test(path)
            },
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]--[local]--[hash:base64:5]',
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, '/../'),
        compress: true,
        port: 3000,
        inline: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            // API_BASE_URL: JSON.stringify('http://service.test.jeean.cn/base'),
            // API_FORM_URL: JSON.stringify('http://service.test.jeean.cn/extra'),
            // API_INSURE_URL: JSON.stringify('http://insurance.test.jeean.cn'),
            'API_BASE_URL': JSON.stringify('http://192.168.1.200/base'),
            'API_FORM_URL': JSON.stringify('http://192.168.1.200/extra'),
            'API_INSURE_URL': JSON.stringify('http://192.168.1.200:86'),
            'API_HELP_URL': JSON.stringify('http://api.jeean.cn'),
            'API_FEEDBACK_URL': JSON.stringify('http://api.feedback.jeean.cn'),
            'process.env.NODE_ENV': JSON.stringify('dev'),
            'ENV': JSON.stringify('dev'),
            'GD_MAP': JSON.stringify('http://webapi.amap.com/maps?v=1.3&key=57263d2a64c3e10d5fc13819ed372b00'),
            'PATH_PREFIX': JSON.stringify(''),
            'LOCAL_DOMAIN': JSON.stringify('http://127.0.0.4'),
            //'LOCAL_DOMAIN': JSON.stringify('http://insur_tp.com'),
            // 'PATH_PREFIX': JSON.stringify('/b4628fe4f5f38e5b293be2024ce95239')
        }),
    ]
}
