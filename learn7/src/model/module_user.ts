import { Action, Module, Mutation, VuexModule, config } from 'vuex-module-decorators';

import * as mm from '@/model';

config.rawError = true;


/** mm.api.UserDto に対応。画面からの入力を受け付けるためのデータ型 */
export interface UserEditForm {

	id: string;

	name: string;

	groupId: string;
}


export const convertToUserEditForm = (dto: mm.api.UserDto): UserEditForm => {

	return {
		id: String(dto.id),
		name: dto.name,
		groupId: String(dto.groupId),
	};
};


export const convertToUserDto = (form: UserEditForm): mm.api.UserDto => {

	return {
		id: parseInt(form.id),
		name: form.name,
		groupId: parseInt(form.groupId),
	};
};


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


	/** ユーザ情報の編集用のデータ */
	editForm: UserEditForm = {
		id: '',
		name: '',
		groupId: '',
	};


	@Mutation
	private _commitDataForm(pf: Partial<UserEditForm>) {
		// スプレッド演算子 を使ったシャローコピー
		this.editForm = { ...this.editForm, ...pf };
	}


	/** ユーザID を指定して編集用データを初期化 */
	@Action
	initDataFormAsync(selectedUserId: number): Promise<void> {
		this._commitDataForm(
			convertToUserEditForm(
				this.list.filter(it => it.id == selectedUserId)[0]
			)
		);
		return Promise.resolve();
	}


	/** 編集用データ(の一部だけでも可) を指定し、こちらで保持しているデータを更新 */
	@Action
	updateDataFormAsync(pf: Partial<UserEditForm>) {
		this._commitDataForm(pf);
	}


	/** 更新の API を実行 */
	@Action
	async executeUpdateAsync() {
		const rv = await mm.api.Api.postUserDataAsync(
			convertToUserDto( this.editForm )
		);
	}
}
