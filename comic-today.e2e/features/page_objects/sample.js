'use strict';

const View = {
    tagElement: 'body'
};

const waitForLoad = () => browser
    .isVisible(View.tagElement).should.eventually.true;

module.exports = {
    waitForLoad
};
