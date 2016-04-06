'use strict';

const angular = require('angular');
				require('angular-sanitize');
				require('angular-route');
				require('angular-resource');
				require('angular-translate');

const sector = angular.module('sector', [
	'ngRoute',
	'ngSanitize',
	'ngResource'
]);

sector
	.value('DEFAULTS', {
		bitrate: 128,
		rates: [
			64,
			128,
			192,
			256
		]
	});

sector.modules = [
	'bitrate'
];

module.exports = sector;