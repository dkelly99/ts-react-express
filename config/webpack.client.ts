import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

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
    devtool: 'source-map',  //#eval-source-map

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
