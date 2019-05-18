/*
// Take infinitely long time xD

import { _Shift } from "./shift";
import { _Decrement } from "../whole-number";
import { AreEqual, TypeOf } from "../misc";

type $ShiftFor<A, N> = 
	AreEqual<N, 0> extends true
		? { type: A }
		: { type: TypeOf<$ShiftFor<_Shift<A>, _Decrement<N>>> }

export type ShiftFor<A extends any[], N extends number> = TypeOf<$ShiftFor<A, N>>;

export type _ShiftFor<A, N> = 
	A extends any[]
		? N extends number
			? ShiftFor<A, N>
			: never
		: never; */