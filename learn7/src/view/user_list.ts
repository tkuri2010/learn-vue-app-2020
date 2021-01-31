import { Vue, Component } from 'vue-property-decorator';

import * as mm from '@/model';

@Component
export default class extends Vue {

	get list(): mm.api.UserDto[] {
		return mm.store().user.list;
	}


	/** コンポーネントが実際に画面上に配置された時に Vue ランタイムから呼ばれる、特別なメソッド */
	mounted(): void {
		mm.store().user.loadListAsync();
	}


	handleSelect(selectedUserId: number) {
		// ユーザが選択された時、編集画面へ。
		// initDataFormAsync() は Promise<> を返すので、
		// then() を使って処理を継続する。
		mm.store().user.initDataFormAsync(selectedUserId)
			.then(() => this.$router.push('/user/data'));
	}
}
