//
// このファイルは例えば OpenAPI Generator などを用いて自動生成してもよい
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
		return mm.executeHttpAsync({
			httpMethod: 'GET',
			path: '/webapi/v1/user/list',
		}) as Promise<ApiResult<UserDto[]>>;
	}


	static postUserDataAsync(v: UserDto): Promise<ApiResult<unknown>> {
		return mm.executeHttpAsync({
			httpMethod: 'POST',
			path: '/webapi/v1/user/data',
			requestBody: v,
		}) as Promise<ApiResult<unknown>>;
	}
}

