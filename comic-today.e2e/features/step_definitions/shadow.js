'use strict';

const poShadow = require('../page_objects/shadow');
const utils = require('../utils/shadow');

module.exports = function () {

    this.When(/^I type "([^"]*)" inside the input$/,
        text =>
            poShadow.type(text));

    this.Then(/^I check if the label has got that "([^"]*)"$/,
        text =>
            poShadow.getLabel()
                .should.eventually.equal(utils.formatText(text)));

};