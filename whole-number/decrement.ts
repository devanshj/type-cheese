import { Unshift } from "../tuple";
import { Numbers } from "./numbers";

export type Decrement<X extends number> = Unshift<Numbers, -1>[X];
export type _Decrement<X> = X extends number ? Decrement<X> : number;