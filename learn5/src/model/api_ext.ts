import * as aa from '@/arch';
import * as mm from '@/model';


/** 実際にHTTP通信を行うロジック。ただしインチキ実装なので、実際には引数をそのまま返すのみ */
export const executeHttp_and_return_Async = async <T>(result: T): Promise<T> => {

	try {
		mm.store().app.enterBusyAsync();

		// 本当は素の xhr なり axios ライブラリなりで、実際に HTTP 通信を行う。
		await aa.delayAsync(1000);

		return result;

	} finally {
		mm.store().app.leaveBusyAsync();
	}
};
