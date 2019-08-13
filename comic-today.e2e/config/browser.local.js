'use strict';

const baseConfig = require('./base').config;
const config = Object.assign({}, baseConfig, {
    host: 'localhost',
    port: 9999,
    selenium: {
        port: 9999
    },
    baseUrl: 'http://localhost:8001',
    environment: 'web',
    profiterole: true,
    capabilities: [{
        browserName: 'chrome'
    }]
});

module.exports = {config};
