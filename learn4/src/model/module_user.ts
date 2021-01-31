import { Action, Module, Mutation, VuexModule, config } from 'vuex-module-decorators';

import * as mm from '@/model';

config.rawError = true;

@Module({
	namespaced: true,
	name: 'user'
})
export class UserModule extends VuexModule {

	list: mm.api.UserDto[] = [];

	errors: string[] = [];


	@Mutation
	private _commitList(list: mm.api.UserDto[]) {
		this.list = list;
	}


	/** ユーザの一覧を取得・更新 */
	@Action
	async loadListAsync(): Promise<void> {

		this._commitList([]); // 一旦クリア

		const rv = await mm.api.Api.getUserListAsync();

		this._commitList(rv.payload);
	}
}
