import Vuex, { Module, Store } from "vuex";
import { getModule } from "vuex-module-decorators";

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


let _rootStore: Store<IRootState>|undefined = undefined;
let _subModules: IRootState|undefined = undefined;

const _requireInitialized = (): void => {
	if (_rootStore == null) {
		_rootStore = new Vuex.Store({
			modules,
		});

		_subModules = {
			app: getModule(mm.AppModule, _rootStore),
			user: getModule(mm.UserModule, _rootStore),
		};
	}
};

export const rootStore = (): Store<IRootState> => {
	_requireInitialized();
	return _rootStore!;
};

export const store = (): IRootState => {
	_requireInitialized();
	return _subModules!;
};
