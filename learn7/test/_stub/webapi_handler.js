const fs = require('fs');
const path = require('path');


const PATH_REGEXP = new RegExp('^/webapi/v1/(.+?)/(.+)');

const makeStubJsonFilePath = (httpMethod, originalUrl) => {
	const m = PATH_REGEXP.exec(originalUrl);
	if (!m) return null;

	return path.join(__dirname, 'json', `${m[1]}_${m[2]}__${httpMethod.toLowerCase()}.ts`);
};


// 「//>>」～「//<<」の間を抜き出したい
const EXTRACT_REGEXP = new RegExp('//>>([^]+)//<<');

const loadStubJson = (filePath) => {
	const content = fs.readFileSync(filePath).toString();
	const m = EXTRACT_REGEXP.exec(content);
	if (!m) return null;

	//return JSON.parse(m[1]);
	return eval('(' + m[1] + ')'); // スタブファイルはラフな書き方をしているので、JSON.parse() では対応できないかも
};


/** 仮の Web API の実装 */
module.exports = function(proxyRes, req, res) {

	const filePath = makeStubJsonFilePath(req.method, req.originalUrl);
	if (filePath == null || !fs.existsSync(filePath)) {
		res.status(404);
		res.json({
			status: 'not found',
			payload: null,
		});
		return;
	}

	res.json({
		status: 'ok',
		payload: loadStubJson(filePath)
	});
};
