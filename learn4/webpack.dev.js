const path = require('path');
const { merge } = require('webpack-merge'); // ※1
const common = require('./webpack.common.js');

// ブラウザからは、どのポート番号を使って開発用ローカルサーバにアクセスしてもらおうか。
// かなり自由で構わないが、開発用だし、普通の 80 なんかはあまり使いたくない。。。
const PORT = 31975;

module.exports = merge(common, {
	mode: 'development',

	devtool: 'inline-source-map',

	devServer: {
		contentBase: path.join(__dirname, 'public'),

		// このURL以下は、webpack開発用サーバは仮想的にファイルを持っている
		publicPath: `http://localhost:${PORT}/assets/`,

		historyApiFallback: false,
		host: '0.0.0.0',
		port: PORT,
	}
});


// ※1
//  以前のバージョンの webpack-merge は
//      const merge = require('webpack-merge');
//  としてロードできてた。
//  このあたりの技術は移り変わりが速いので、公式のチェックは怠れない。
