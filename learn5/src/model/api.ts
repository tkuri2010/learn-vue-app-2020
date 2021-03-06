//
// このファイルは例えば OpenAPI Generator などを用いて自動生成してもよい
// ... という想定だが、現在の版はテスト用データをハードコードしており
// OpenAPI Generator での自動生成は適さない。
//
import * as mm from '@/model';


export interface ApiResult<TPayload> {

	status: string;

	payload: TPayload;
}


export interface UserDto {

	/** ユーザID */
	id: number;

	/** 名前 */
	name: string;

	/** 所属グループのID */
	groupId: number;
}


export class Api {

	static getUserListAsync(): Promise<ApiResult<UserDto[]>> {
		return mm.executeHttp_and_return_Async({
			status: 'ok',
			payload: [
				{ id: 12345, name: 'Alpha Beta', groupId: 123, },
				{ id: 22345, name: 'Foo Bar', groupId: 123, },
				{ id: 32345, name: 'Lorem Ipsum', groupId: 223, },
			]
		});
	}
}

