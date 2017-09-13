(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const gimmeEnglish = () => {
	return "What's going on, homie?";
};

module.exports = gimmeEnglish;
},{}],2:[function(require,module,exports){
"use strict";

const outputFrench = () => {
	return "Quoi de neuf, homie";
};

module.exports = outputFrench;
},{}],3:[function(require,module,exports){
"use strict";

const french = require('./french.js');
const italian = require('./italian.js');
const spanish = require('./spanish.js');
const english = require('./english.js');


const greetingGenerator = {

	french, italian, spanish, english

};


module.exports = greetingGenerator;
},{"./english.js":1,"./french.js":2,"./italian.js":4,"./spanish.js":6}],4:[function(require,module,exports){
"use strict";

const outputItalian = () => {
	return "italian , homie";
};

module.exports = outputItalian;

},{}],5:[function(require,module,exports){
"use strict";

const GreetingGenerator = require('./greetingGenerator');

document.getElementById('button').addEventListener('click', (event) => {
	let languageSelected = event.target.id;
	if (event.target.id ==='button') {
		languageSelected = 'english';
	} else {
		languageSelected = event.target.id;

	}
	console.log(languageSelected);
	document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();
});


},{"./greetingGenerator":3}],6:[function(require,module,exports){
"use strict";

const outputSpanish = () => {
	return "hola, homie";
};

module.exports = outputSpanish;
},{}]},{},[5]);
