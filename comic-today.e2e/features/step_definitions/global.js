'use strict';

const poGlobal = require('../page_objects/global');

module.exports = function () {

    this.Given(/^I am at the Initial page$/,
        () =>
            poGlobal.start());

};