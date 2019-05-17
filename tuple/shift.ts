export type Shift<A extends any[]> =
((...ab: A) => void) extends ((a: any, ...b: infer B) => void)
	? B
	: never;

export type _Shift<A> = A extends any[] ? Shift<A> : never