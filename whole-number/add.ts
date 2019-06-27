import { TypeOf } from "../misc";
import { _Increment } from "./increment";
import { _Decrement } from "./decrement";

export type $Add<X, Y> =
	Y extends 0
		? { type: X }
		: { type: TypeOf<$Add<_Increment<X>, _Decrement<Y>>> }

export type _Add<X, Y> = TypeOf<$Add<X, Y>>;
export type Add<X extends number, Y extends number> = _Add<X, Y>;