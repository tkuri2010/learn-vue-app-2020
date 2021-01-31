import { Vue } from 'vue-property-decorator';

import router from './route';

new Vue({
	el: '#app',

	router,

	template: '<router-view />'
});
