import { Vue, Component } from 'vue-property-decorator';

import * as mm from '@/model';

@Component
export default class extends Vue {

	get form() {
		return mm.store().user.editForm;
	}

	_updateForm(pf: Partial<mm.UserEditForm>) {
		mm.store().user.updateDataFormAsync(pf);
	}

	get formUserId() { return this.form.id; }

	get formUserName() { return this.form.name; }
	set formUserName(v: string) { this._updateForm({ name: v }); }

	get formGroupId() { return this.form.groupId; }
	set formGroupId(v: string) { this._updateForm({ groupId: v }); }


	handleSubmit() {
		mm.store().user.executeUpdateAsync()
			.then(() => this.$router.back());
	}
}
