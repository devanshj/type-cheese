export type Unshift<A extends any[], X> =
	((x: X, ...a: A) => void) extends ((...xa: infer XA) => void)
		? XA
		: never;

export type _Unshift<A, X> =
    A extends any[]
        ? Unshift<A, X>
        : never;

export type _Unshift2<A, X> =
    A extends [] ? [X] :
    A extends [infer A0] ? [X, A0] :
    A extends [infer A0, infer A1] ? [X, A0, A1] :
    A extends [infer A0, infer A1, infer A2] ? [X, A0, A1, A2] :
    A extends [infer A0, infer A1, infer A2, infer A3] ? [X, A0, A1, A2, A3] :
    A extends [infer A0, infer A1, infer A2, infer A3, infer A4] ? [X, A0, A1, A2, A3, A4] :
    A extends [infer A0, infer A1, infer A2, infer A3, infer A4, infer A5] ? [X, A0, A1, A2, A3, A4, A5] :
    A extends [infer A0, infer A1, infer A2, infer A3, infer A4, infer A5, infer A6] ? [X, A0, A1, A2, A3, A4, A5, A6] :
    A extends [infer A0, infer A1, infer A2, infer A3, infer A4, infer A5, infer A6, infer A7] ? [X, A0, A1, A2, A3, A4, A5, A6, A7] :
    never