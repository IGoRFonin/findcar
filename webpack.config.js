var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
console.log('-------------------', 'aaaaaaaaa')
module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		'react-hot-loader/patch',
		'./index.tsx'
	],
	output: {
		filename: 'bundle.js',
		publicPath: "/",
		path: path.resolve(__dirname, "dist")
	},
	context: path.resolve(__dirname, 'src'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'json', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				loader: ['react-hot-loader/webpack', 'ts-loader']
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'index.html'
		})
	],
	devServer: {
		hot: true,
        historyApiFallback: true,
        proxy: [{
            path: '/api',
            target: 'http://localhost:8090/'
        },{
            path: '/img',
            target: 'http://localhost:8090'
        }],
		//Enable this if you want to never refresh (this allows hot-reloading app.tsx, but won't auto-refresh if you change index.tsx)
		//hotOnly: true
	}
};