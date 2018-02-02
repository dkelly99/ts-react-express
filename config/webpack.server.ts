import * as fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
declare const __dirname: string;

// const nodeModules = fs.readdirSync('node_modules').filter( (pkg) => ['.bin'].indexOf(pkg) === -1 );

export const serverConfig: webpack.Configuration = {
    entry: {
        server: './src/server/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../', 'dist/server')
    },

    target: 'node',

    node: {__dirname: true,
        __filename: true
    },

    /*externals: [
        (context, request, callback: any) => {
            const  pathStart = request.split('/')[0];
            if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
                return callback(null, "commonjs " + request);
            };
            callback();
        }
    ],*/

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                loader: 'ts-loader',
                options: {
                    configFile: 'src/server/tsconfig.json'
                },
                test: /\.tsx?$/
            }
        ]
    }
};
