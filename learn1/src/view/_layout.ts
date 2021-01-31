import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			message: 'Hello World!',
		};
	},
	methods: {
		handleClick() {
			alert(this.message);
		}
	}
});

// 現在、まだ vue-class-component や vue-property-decorator をインストールしていないので
// 上記のような標準的な記述の仕方をしている。
// このままではやはり若干煩雑なので、後で vue-property-decorator を使うことにする。
