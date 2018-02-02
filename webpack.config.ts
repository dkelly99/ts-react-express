import * as webpack from 'webpack';
import {clientConfig} from './config/webpack.client';
import {serverConfig} from './config/webpack.server';

const config: webpack.Configuration[] = [
    clientConfig,
    serverConfig
];

export default config;
