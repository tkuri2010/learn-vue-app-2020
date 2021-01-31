
export const clonePojo = <T>(o: T): T =>
		JSON.parse(JSON.stringify(o));


export const delayAsync = (msec: number) =>
		new Promise<void>(resolve => setTimeout(resolve, msec));
