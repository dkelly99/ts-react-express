"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const path = require("path");
exports.app = express();
exports.port = 3000;
exports.server = new http_1.Server(exports.app);
exports.server.listen(exports.port);
exports.app.use((req, _, next) => {
    console.log('request xyz: ', req.originalUrl);
    next();
});
exports.app.use(express.static(path.resolve('dist/client'), { maxAge: 31536000000 }));
//# sourceMappingURL=index.js.map