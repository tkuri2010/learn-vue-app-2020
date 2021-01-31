import { Vue, Component } from 'vue-property-decorator';

import * as mm from '@/model';
import { getModule } from 'vuex-module-decorators';

@Component
export default class extends Vue {

	get isBusy() {
		return mm.store().app.isBusy;
	}
}
