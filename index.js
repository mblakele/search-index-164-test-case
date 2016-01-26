// index.js

'use strict';

const SearchIndex = require('search-index');
const fs = require('fs');
const path = require('path');

const si = SearchIndex({
    deletable: true,
    fieldedSearch: true,
    fieldsToStore: 'all',
    indexPath: 'si',
    logLevel: 'debug',
    nGramLength: 1,
    separator: /\W+/,
    stopwords: []
});

var COUNT = 0;
var FATAL;
var testData = fs.readFileSync('test.txt', {encoding: 'utf8'});

function loop() {
  if (FATAL) {
    console.error(FATAL);
    return;
  }

  console.log(COUNT);
  si.tellMeAboutMySearchIndex(function(err, result) {
    console.log(result);
    si.add(
      [{id: 'test-001', body: testData}],
      {batchName: 'test-batch'},
      function(err) {
        if (err) { console.error(err); }
        FATAL = err;
        COUNT++;
        setTimeout(loop, 0);
      });
  });
}

loop();

// index.js
