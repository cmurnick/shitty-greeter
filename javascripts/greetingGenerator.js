"use strict";

const french = require('./french.js');
const italian = require('./italian.js');
const spanish = require('./spanish.js');
const english = require('./english.js');


const greetingGenerator = {

	french, italian, spanish, english

};


module.exports = greetingGenerator;