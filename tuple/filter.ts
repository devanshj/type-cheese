import { _Shift } from "./shift";
import { TypeOf, AreEqual } from "../misc";
import { _Unshift } from "./unshift";

type $Filter<A extends any[], X> =
	AreEqual<A,[]> extends true
		? { type: A }
		: AreEqual<A[0], X> extends true
			? { type: TypeOf<$Filter<_Shift<A>, X>> }
			: { type:
				_Unshift<
					TypeOf<$Filter<_Shift<A>, X>>,
					A[0]
				>
			};

export type Filter<A extends any[], X> = TypeOf<$Filter<A, X>>


export type _Filter<A, X> =
	A extends any[]
		? Filter<A, X>
		: never;