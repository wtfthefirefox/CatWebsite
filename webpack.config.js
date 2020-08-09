const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true}
                    }, {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    }, {
                        loader: "sass-loader",
                        options: { sourceMap: true}
                    }
                ]
            }
            ,
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true}
                    }, {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    }, {
                        loader: "sass-loader",
                        options: { sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ]
            }
        ]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
    ],
}