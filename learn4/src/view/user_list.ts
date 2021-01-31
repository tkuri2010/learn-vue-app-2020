import { Vue, Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

import * as mm from '@/model';

@Component
export default class extends Vue {

	get list(): mm.api.UserDto[] {
		return getModule(mm.UserModule, mm.rootStore).list;
		// この list は、最初は空かも知れない。
		// ↓で実行している loadListAsync() の中で何かがセットされる。
		// 何かがセットされれば Vuex と Vue がうまく検知・連動し、自動で画面を更新する。
	}


	/** コンポーネントが実際に画面上に配置された時に Vue ランタイムから呼ばれる、特別なメソッド */
	mounted(): void {
		getModule(mm.UserModule, mm.rootStore).loadListAsync();
	}
}
