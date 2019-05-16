import { TypeOf } from "../utils";
import { _Multiply } from "./multiply";
import { _Decrement } from "./decrement";


export type __Pow<X, Y> = 
    Y extends 1
        ? { type: X }
        : { type: _Multiply<X, _Multiply<X, _Decrement<Y>>> };

export type _Pow<X, Y> = TypeOf<__Pow<X, Y>>;
export type Pow<X extends number, Y extends number> = _Pow<X, Y>;