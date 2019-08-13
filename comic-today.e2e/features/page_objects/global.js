'use strict';

const entrypoint = {
    web() {
        return browser.url('/index.html');
    },
    app() {
        return browser;
    }
};

const start = () => entrypoint[browser.options.environment || 'web']()
    .initTestability();

module.exports = {
    start
};
