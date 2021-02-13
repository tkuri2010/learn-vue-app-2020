import * as aa from '@/arch';
import * as mm from '@/model';


/** HTTP通信のためのパラメータ */
export interface HttpArgs {

	httpMethod: 'GET'|'POST';

	path: string;

	requestBody?: unknown;
}


/** 実際にHTTP通信を行うロジック */
export const executeHttpAsync = async (args: HttpArgs): Promise<unknown> => {

	try {
		mm.store().app.enterBusyAsync();

		// 本当はこの delay は不要。
		// 本デモでは HTTP 通信が速く、画面効果を確認しにくかったりするので、わざとウエイトをかけている。
		await aa.delayAsync(1000);

		// 本来なら axios など外部ライブラリを活用したい
		return await new Promise<unknown>(resolve => {
			let xhr = new XMLHttpRequest();
			xhr.addEventListener('load', (_ev: ProgressEvent<XMLHttpRequestEventTarget>) => {
				resolve(JSON.parse(xhr.responseText));
			});
			xhr.open(args.httpMethod, args.path);
			if (args.httpMethod == 'GET') {
				xhr.send();
			} else {
				xhr.send(JSON.stringify(args.requestBody));
			}
		});

	} finally {
		mm.store().app.leaveBusyAsync();
	}
};
