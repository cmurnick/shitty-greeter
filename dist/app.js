(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputFrench = () => {
	return "Quoi de neuf, homie";
};

module.exports = outputFrench;
},{}],2:[function(require,module,exports){
"use strict";

const french = require('./french.js');
const italian = require('./italian.js');
const spanish = require('./spanish.js');


const greetingGenerator = {

	french, italian, spanish

};


module.exports = greetingGenerator;
},{"./french.js":1,"./italian.js":3,"./spanish.js":5}],3:[function(require,module,exports){
"use strict";

const outputItalian = () => {
	return "italian , homie";
};

module.exports = outputItalian;

},{}],4:[function(require,module,exports){
"use strict";

const GreetingGenerator = require('./greetingGenerator');

document.getElementById("output").innerHTML = GreetingGenerator.italian();
},{"./greetingGenerator":2}],5:[function(require,module,exports){
"use strict";

const outputSpanish = () => {
	return "hola, homie";
};

module.exports = outputSpanish;
},{}]},{},[4]);
