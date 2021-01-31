import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

	message = 'Hello World!!';

	handleClick() {
		alert(this.message);
	}
}
