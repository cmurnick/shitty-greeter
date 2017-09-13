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

