import { _Decrement } from "../whole-number";
import { AreEqual } from "../misc";

export type Last<A extends any[]> = 
	AreEqual<A, []> extends true
		? undefined
		: A[_Decrement<A["length"]>];
		
export type _Last<A> =
	A extends any[]	
		? Last<A>
		: never;