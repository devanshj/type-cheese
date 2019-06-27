import { _Shift } from "./shift";
import { _Head } from "./head";
import { _Unshift } from "./unshift";
import { TypeOf } from "../misc";

// modified version of https://github.com/kgtkr/typepark/blob/master/src/list.ts#L11
export type $Reverse<A extends any[], AR extends any[] = []> = 
	A extends []
		? { type: AR }
		: { type: TypeOf<$Reverse<_Shift<A>, _Unshift<AR, _Head<A>>>> }

export type Reverse<A extends any[]> = TypeOf<$Reverse<A>>;
export type _Reverse<A> = 
	A extends any[]
		? Reverse<A>
		: never;