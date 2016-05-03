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

sector.value('DEFAULTS', {
	bitrate: 160,
	tab: 0,
	rates: [
		56,
		160
	],
	equalizer: {
		"0.2": 100,
		"1": 90,
		"3": 70,
		"5": 60,
		"6": 70,
		"8": 70,
		"9": 60,
		"10": 80,
		"11": 60,
		"12": 50,
		"13": 60,
		"15": 70,
		"16": 60,
		"17": 80,
		"18": 80,
		"20": 100
	}
});

sector.modules = [
	'bitrate',
	'equalizer',
	'player',
	'tab',
	'blocks'
];

module.exports = sector;