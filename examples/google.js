/**
 * Created by arminhammer on 8/12/15.
 */
"use strict";

var rubbertiger = require('../lib/index');

var googleTemplate = {
  "url": "http://www.google.com/",
  "input": [
    {
      "element": "#lst-ib",
      "val": "tigers"
    }
  ],
  "follow": {
    "method": {
      "click": "button.lsb"
    },
    "val": {
      "links": ".g > a[href]"
    }
  }
};

rubbertiger.scrape(template, function(result) {

  console.log('Links from Google:');
  console.log(result);

});
