"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//declare const __dirname: string;
exports.clientConfig = {
    entry: {
        client: './src/client/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../', 'dist/client'),
        publicPath: '/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'src/client/tsconfig.json'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/client/index.template.html'
        })
    ]
};
//# sourceMappingURL=webpack.client.js.map