import { TypeOf } from "../misc";
import { _Add } from "./add";
import { _Decrement } from "./decrement";

export type $Multiply<X, Y> = 
	Y extends 1
		? { type: X }
		: { type: _Add<X, _Multiply<X, _Decrement<Y>>> };

export type _Multiply<X, Y> = TypeOf<$Multiply<X, Y>>;
export type Multiply<X extends number, Y extends number> = _Multiply<X, Y>;