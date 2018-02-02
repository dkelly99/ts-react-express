import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import {clientConfig} from '../../config/webpack.client';
import {app, port} from './';

const compiler: webpack.ICompiler = webpack(clientConfig);
const clientInstance = webpackDevMiddleware(compiler, {
    publicPath: '/',
    stats: {
        colors: true
    }
});

app.use(clientInstance);
/* tslint:disable */
console.log('');
console.log('\x1b[33m \x1b[1m');  // yellow, bright
console.log(`##########    dev server started at http://localhost:${port}/index.html    ##########`);
console.log('\x1b[0m');
/* tslint:enable */
