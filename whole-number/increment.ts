import { Shift } from "../tuple";
import { Numbers } from "./numbers";

export type Increment<X extends number> = Shift<Numbers>[X];
export type _Increment<X> = X extends number ? Increment<X> : number;