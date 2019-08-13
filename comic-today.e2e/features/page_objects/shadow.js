'use strict';

const View = {
    tagInput: 'my-greeting #for-input',
    tagLabel: 'another-greeting h1 strong'
};

const type = text => browser
    .setValue(View.tagInput, text);

const getLabel = () => browser
    .getText(View.tagLabel);

module.exports = {
    type,
    getLabel
};
