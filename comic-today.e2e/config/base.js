'use strict';

const config = {
  waitforTimeout: 5000,
  cucumber: {
    features: [
      './features'
    ],
    require: [
      './features'
    ]
  },
  shadowDOM: true, 
  htmlReport: {
    title:'Tests e2e reports',
    themeDir:'',
    theme:'bootstrap'
  }
};

module.exports = { config };
