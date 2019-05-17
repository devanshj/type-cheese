export type TypeOf<T> =
	T extends { type: infer R }
		? R
		: never;

export type AssertTrue<T extends true> = T;
export type AreEqual<A, B> = 
	Exclude<A, B> extends never
		? Exclude<B, A> extends never
			? true
			: false
		: false;