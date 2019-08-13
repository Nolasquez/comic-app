'use strict';

const poSample = require('../page_objects/sample');

module.exports = function () {

    this.Then(/^I check if the element whit tag 'body' exists$/,
        () =>
            poSample.waitForLoad());

};