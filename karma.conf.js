var webpack = require("webpack"),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false,


		// frameworks to use
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'assets/js/test.js',
			'node_modules/angular-mocks/angular-mocks.js',

			'tests/*.test.js'
		],


		// list of preprocessors
		preprocessors: {
			'./assets/js/test.js': ['webpack'],
			'./tests/**/*.js': ['babel']
		},

		babelPreprocessor: {
			options: {
				presets: ['es2015'],
				sourceMap: 'inline'
			}
		},


		webpack: {
			devtool: 'source-map',
			context: __dirname,
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel?presets[]=es2015'
					},
					{
						test: /\.ts$/,
						loader: 'typescript'
					},
					{
						test: /\.styl$/,
						loader: ExtractTextPlugin.extract('style', 'css!stylus?paths=bower_components/bootstrap3-stylus/styl/&sourceMap&linenos&&resolve url')
					},
					{
						test: /\.html$/,
						loader: 'raw'
					},
					{
						test: /\.jade$/,
						loader: 'jade'
					},
					{
						test: /.(png|jpg|jpeg|gif|svg)$/,
						loader: 'url?name=[name]-[hash].[ext]&limit=4000'
					},
					{ test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name]-[hash].[ext]' },
					{ test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name]-[hash].[ext]' }
				]
			},
			stylus: {
				use: [require('nib')()],
				import: ['~nib/lib/nib/index.styl']
			}
		},

		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},

		webpackMiddleware: {
			stats: {
				colors: true
			}
		},


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['spec'],
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		//browsers: ['Chrome', 'Chrome_without_security'],
		//customLaunchers: {
		//	Chrome_without_security: {
		//		base: 'Chrome',
		//		flags: ['--disable-web-security']
		//	}
		//},
		browsers: ['Chrome'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 90000,


		// List plugins explicitly, since autoloading karma-webpack
		// won't work here
		plugins: [
			require("karma-jasmine"),
			require("karma-webpack"),
			require("karma-chrome-launcher"),
			require('karma-babel-preprocessor')
		]
	});
};