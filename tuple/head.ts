export type Head<A extends any[]> = A[0];
export type _Head<A> = 
	A extends any[]
		? A[0]
		: never;