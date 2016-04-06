'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development',
	is_dev = NODE_ENV === 'development',
	webpack = require ('webpack'),

	autoprefixer = require('autoprefixer'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	//PathRewriterPlugin = require('webpack-path-rewriter')
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

	context: __dirname,
	entry: {
		main: "./assets/js/application.js",
		test: "./assets/js/test.js",
		styles: "./assets/css/application.styl"
	},

	module:  {
		loaders:[
			/*{
				test: /[/]fonts[/]/,
				loader: 'file?name=[path][name]-[hash].[ext]'
			},*/
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
				//loader: 'file?name=[path][name]-[hash].[ext]'
			},
			//{ test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name]-[hash].[ext]' },
			{ test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name]-[hash].[ext]' },
			{ test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name]-[hash].[ext]' },
			{ test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name]-[hash].[ext]' },
			{ test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name]-[hash].[ext]' }

		]
	},

	stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	},

	output: {
		path: __dirname + "/assets",
		publicPath: "/",
		//filename: is_dev? "sector.js" : "[name]-[hash].js",
		filename: 'sector-[chunkhash].js',
		//chunkFilename: is_dev ? "sector.js" : "[name]-[hash].js",
		library: 'SECTOR'
	},

	watch: is_dev,
	watchOptions: {
		aggregateTimeout: 1000
	},

	//devtool: is_dev ? "inline-source-map" : "source-map",
	devtool: "source-map",

	plugins: [
		// Reference: https://github.com/ampedandwired/html-webpack-plugin
		// Render index.html
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'body'
		}),
		// Reference: https://github.com/webpack/extract-text-webpack-plugin
		// Extract css files
		// Disabled when in test mode or not in build mode
		new ExtractTextPlugin('[name]-[hash].css', {
			allChunks: true,
			disable: is_dev
		})
	]

};

if (!is_dev) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
		//,
		//new PathRewriterPlugin()
		//,
		// Copy assets from the public folder
		// Reference: https://github.com/kevlened/copy-webpack-plugin
		//new CopyWebpackPlugin([{
		//	from: __dirname + '/src/public'
		//}])
	);
}