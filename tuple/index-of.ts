import { AreEqual } from "../misc";
import { _Shift } from "./shift";
import { _ToNumber } from "../whole-number/to-number";

type $IndexOf<A extends any[], X> = {
	[I in keyof A]: AreEqual<A[I], X> extends true ? _ToNumber<I> : never
}[number];

export type IndexOf<A extends any[], X> = 
	$IndexOf<A, X> extends never
		? -1
		: $IndexOf<A, X>;

// `AreEqual<$IndexOf<A, X>, never> extends true` somehow doesn't work

export type _IndexOf<A, X> =
	A extends any[]
		? IndexOf<A, X>
		: never;