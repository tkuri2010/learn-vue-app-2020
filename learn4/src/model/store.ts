import { Vue } from 'vue-property-decorator';
import Vuex, { Module, Store } from "vuex";

Vue.use(Vuex);

import * as mm from '@/model';

interface IRootState {
	app: mm.AppModule,
	user: mm.UserModule,
	// add more modules...
}


const modules: { [K in keyof IRootState]: Module<any, IRootState> } = {
	app: mm.AppModule,
	user: mm.UserModule,
	// add more modules...
};

export const rootStore = new Store<IRootState>({
	modules
});

