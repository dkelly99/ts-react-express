import * as webpack from 'webpack';
import {clientConfig} from './config/webpack.client';
import {serverConfig} from './config/webpack.server';

/*serverConfig.entry = {
    server: './src/server/index.dev.ts'
};*/

const config: webpack.Configuration[] = [
    clientConfig,
    serverConfig
];

export default config;
