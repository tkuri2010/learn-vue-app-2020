import { Action, Module, Mutation, VuexModule, config } from 'vuex-module-decorators';

config.rawError = true;

@Module({
	namespaced: true,
	name: 'app'
})
export class AppModule extends VuexModule {

	/**
	 * セッションID...今回のサンプルでは未使用だが、この値はログイン時にサーバが複雑な値を生成して
	 * サーバと通信する際には常に照合を行うべき。
	 */
	sessionId = 'asdf-qwer-xxxx-xxxx';


	busyLevel = 0;


	get isBusy() {
		return 1 <= this.busyLevel;
	}


	@Mutation
	private _commitBusyLevelDelta(dLevel: number) {
		if (0 <= this.busyLevel + dLevel) {
			this.busyLevel += dLevel;
		}
	}


	/** これからしばらくユーザの操作をブロックしたい、といった場合に実行 */
	@Action
	enterBusyAsync(): Promise<void> {
		this._commitBusyLevelDelta(1);
		return Promise.resolve();
	}


	/** ビジー状態の終わり */
	@Action
	leaveBusyAsync(): Promise<void> {
		this._commitBusyLevelDelta(-1);
		return Promise.resolve();
	}
}
