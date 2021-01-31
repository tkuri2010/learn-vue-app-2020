import { Vue } from 'vue-property-decorator';
import Vuex from 'vuex';

import router from './route';

import * as mm from '@/model';

Vue.use(Vuex);

new Vue({
	el: '#app',

	store: mm.rootStore(),

	router,

	template: '<router-view />'
});
