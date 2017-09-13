"use strict";

const french = require('./french.js');
const italian = require('./italian.js');
const spanish = require('./spanish.js');


const greetingGenerator = {

	french, italian, spanish

};


module.exports = greetingGenerator;