'use strict';

const sector = require('./config');

sector.modules.forEach((module)=> {
	connect(module);
});

function connect(module) {
	let path = './components/' + module + '/';
	require(path + 'Model')(sector);	// Model
	require(path + 'Ctrl')(sector); 	// Controller
	require(path + 'styles');			// Styles
	require(path + 'Component')(		// Component
		sector,
		require(path + 'template.html')	// Template
	);

	//let path = './components/';
	//let context = require.context(
	//	path,
	//	true,
	//	/^(?!.*Component||template).*$/
	//);
	//context.keys().forEach(context);
	//require(path + module) (
	//	sector,
	//	require(path + module + '.html')
	//);
}