import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {

	message = 'vue-router sample!';

	handleClick() {
		alert(this.message);
	}
}
