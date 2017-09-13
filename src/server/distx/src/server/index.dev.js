"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const _1 = require("./");
const webpack_client_1 = require("../../config/webpack.client");
const compiler = webpack(webpack_client_1.clientConfig);
const clientInstance = webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: false,
    stats: {
        colors: true
    }
});
_1.app.use(clientInstance);
console.log('');
console.log('\x1b[33m \x1b[1m'); // yellow, bright
console.log(`##########    dev server started at http://localhost:${_1.port}/index.html    ##########`);
console.log('\x1b[0m');
//# sourceMappingURL=index.dev.js.map