import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

export const clientConfig: webpack.Configuration = {
    entry: {
        client: './src/client/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../', 'dist/client'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',  // #eval-source-map

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                loader: 'ts-loader',
                options: {
                    configFile: 'src/client/tsconfig.json'
                },
                test: /\.tsx?$/
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
