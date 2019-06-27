import { TypeOf } from "../misc";
import { _Unshift } from "./unshift";
import { _Shift } from "./shift";

type $Filter<A extends any[], P extends boolean[]> =
	A extends []
		? { type: A }
		: P[0] extends false
			? { type: TypeOf<$Filter<_Shift<A>, _Shift<P>>> }
			: { type:
				_Unshift<
					TypeOf<$Filter<_Shift<A>, _Shift<P>>>,
					A[0]
				>
			};

export type Filter<A extends any[], P extends boolean[]> =
	TypeOf<$Filter<A, P>>

export type _Filter<A, P> = 
	A extends any[]
		? P extends any[]
			? TypeOf<$Filter<A, P>>
			: never
		: never;