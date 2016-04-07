'use strict';

const sector = require('./config');

sector.modules.forEach((module)=> {
	connect(module);
});

function connect(module) {
	let path = './components/' + module + '/';
	require(path + 'Model')(sector);	// Model
	require(path + 'Ctrl')(sector); 	// Controller
	require(path + 'Component')(		// Component
		sector,
		require(path + 'template')		// Template
	);
}