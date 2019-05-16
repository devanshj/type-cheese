import { TypeOf } from "../utils";
import { _Increment } from "./increment";
import { _Decrement } from "./decrement";

export type __Add<X, Y> =
Y extends 0
    ? { type: X }
    : { type: TypeOf<__Add<_Increment<X>, _Decrement<Y>>> }

export type _Add<X, Y> = TypeOf<__Add<X, Y>>;
export type Add<X extends number, Y extends number> = _Add<X, Y>;