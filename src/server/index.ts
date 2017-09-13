import * as express from 'express';
import {Server} from 'http';
import * as path from 'path';

export const app = express();
export const port = 3000;
export const server = new Server(app);

server.listen(port);

app.use((req, _, next) => {
    console.log('request xyz: ', req.originalUrl);
    next();
});

app.use(express.static(path.resolve('dist/client'), {maxAge: 31536000000}));
