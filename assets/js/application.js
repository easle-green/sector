'use strict';

const sector = require('./config');

sector.modules.forEach((module)=> {
	connect(module);
});

function connect(module) {
	let path = './components/' + module + '/';
	require(path + '_' + module)(sector);		// Model
	require(path + module + 'Ctrl')(sector); 	// Controller
	require(path + module + '.styl');			// Styles
	require(path + 'index')(		// Component
		sector,
		require(path + module + '.html')		// Template
	);

	//let path = './components/';
	//let context = require.context(
	//	path,
	//	true,
	//	/^(?!.*index||html).*$/
	//);
	//context.keys().forEach(context);
	//require(path + module) (
	//	sector,
	//	require(path + module + '.html')
	//);
}