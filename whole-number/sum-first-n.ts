import { _Add } from "./add";
import { _Decrement } from "./decrement";
import { TypeOf } from "../misc";

type $SumFirstN<N> = 
	N extends 1
		? { type: 1 }
		: { type: _Add<N, _SumFirstN<_Decrement<N>>> };

export type _SumFirstN<N> = TypeOf<$SumFirstN<N>>
export type SumFirstN<N extends number> = _SumFirstN<N>;

// works for only for N <= 9 :| XD