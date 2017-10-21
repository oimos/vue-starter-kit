const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const webpackConfig = {
	devtool: 'source-map',
    cache: false,
	entry: [
		path.resolve(__dirname, './src/js/index.js')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist/js'),
		publicPath: '/dist',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'es2015'
							],
							cacheDirectory: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{		
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => (
									[
										require('postcss-cssnext')(
											{ browsers: ['> 0.01%'] }
										),
										require('postcss-flexbugs-fixes')
									]
								)
							}
						}
					]
				}))
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: '../img/',
							publicPath: '/img/',
						}
					}
				]
			},
			{ 
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
			        use: [
						{		
							loader: 'css-loader',
						}
					],

			        cssModules: {
			        	localIdentName: '[name]__[local]--[hash:base64:5]',
			        	camelCase: true
			        },
			        postcss: [
						require('postcss-cssnext')(
							{ browsers: ['> 0.01%'] }
						),
						require('postcss-flexbugs-fixes')
					]
				}
			}
		]
	},
	resolve: {
		alias: {
	      // 'vue$': 'vue/dist/vue.esm.js'
	      'vue$': 'vue/dist/vue.common.js'
	    },
	},
	plugins: [
		new WebpackBuildNotifierPlugin(),
		new ExtractTextPlugin( '../css/style.css' ),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: path.resolve(__dirname, 'dist') },
			files: [
				'dist*.js',
				'dist/*.css',
				'dist/*.html'
			]
		})
	]
}

module.exports = webpackConfig;