import { Vue } from 'vue-property-decorator';

import router from './route';

import * as mm from '@/model';

new Vue({
	el: '#app',

	store: mm.rootStore,

	router,

	template: '<router-view />'
});
