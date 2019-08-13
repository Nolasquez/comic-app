'use strict';

const baseConfig = require('./base').config;
const config = Object.assign({}, baseConfig, {
    host: 'ondemand.saucelabs.com',
    port: '80',
    user: '',
    key: '',
    baseUrl: 'http://localhost:8001',
    sauceConnect: true,
    environment: 'web',
    capabilities: [{
        browserName: 'chrome'
    }]
});

module.exports = {config};
