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
}
