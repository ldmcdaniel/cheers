#!/usr/bin/env node

var prompt = require('prompt');
prompt.start();

prompt.get(['name'], function (err, result) {
  var capitalName = result.name.toUpperCase();
  for (var i = 0; i < capitalName.length; i++) {
    if (capitalName[i] !== ' '
      && capitalName[i] !== 'A'
      && capitalName[i] !== 'E'
      && capitalName[i] !== 'F'
      && capitalName[i] !== 'H'
      && capitalName[i] !== 'I'
      && capitalName[i] !== 'L'
      && capitalName[i] !== 'M'
      && capitalName[i] !== 'N'
      && capitalName[i] !== 'O'
      && capitalName[i] !== 'R'
      && capitalName[i] !== 'S'
      && capitalName[i] !== 'X') {
        console.log('Give me a ' + capitalName[i] + '!');
    } else if (capitalName[i] !== ' ') {
      console.log('Give me an ' + capitalName[i] + '!');
    }
  }
});
