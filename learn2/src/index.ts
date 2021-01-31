import { Vue } from 'vue-property-decorator';

import Learn1LayoutVue from './view/_layout.vue';

new Vue({
	// index.html の id="app" の要素の中を、Vueが扱うエリアとする
	el: '#app',

	components: {
		'Learn1LayoutVue':  Learn1LayoutVue,
	},

	template: '<learn1-layout-vue />'
});
