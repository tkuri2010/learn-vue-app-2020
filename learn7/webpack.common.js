const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

/** @type import('webpack').Configuration */
const config = {
	entry: './src/index.ts',

	output: {
		// /src/index.ts から繋がる様々なスクリプトを 1つのファイルにパックした時
		// どこのディレクトリに、どんな名前でファイルを生成するか？
		path: path.resolve(__dirname, 'public', 'assets'),
		filename: 'main.bundle.js',

		// main.bundle.js にはまとめず、分割しておきたいファイルは
		// だいたいどんな形式のファイル名で出力するか
		chunkFilename: '[name].[contenthash].js'
	},


	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
			},

			// 今回の vue のトライアルでは .tsx という拡張子のファイルは扱わないが
			// こう設定しておいても害悪でもないと思うので、お決まりの設定として /\.tsx?$/ という正規表現を使っている
			{
				test: /\.tsx?$/,
				exclude: file => /node_modules/.test(file) && !/\.vue\.ts$/.test(file),
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json',
							appendTsSuffixTo: [/\.vue$/],
						}
					}
				]
			},
		]
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.vue'],
		alias: {
			// 便利なエイリアス (tsconfig.json や jest の設定ともリンクしている事に注意)
			'@': path.join(__dirname, 'src'),

			// ソースコード中で「import Vue from 'vue';」と書いたときに、ランタイム版ではなく完全版を読み込むための設定
			// ランタイム版だけで動くアプリを作るのであれば、この設定は不要。
			vue$: 'vue/dist/vue.esm.js',
		}
	},

	plugins: [
		// vue-loader の都合により必要なもの。なぜ必要なのかは「vue-loader の都合によるもの」としか。。
		new VueLoaderPlugin(),
	],

	externals: {
		// パックせずに、外部から <script src="https://cdn..."> などとして読み込みたいもの
		//Vue: 'Vue',
		//'vue-router': 'VueRouter',
		//'lodash': '_',
	}

};

module.exports = config;
