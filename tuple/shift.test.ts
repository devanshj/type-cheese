import { Shift, _Shift } from "./shift";
import { AssertTrue, AreEqual } from "../misc";

type tests = [
	AreEqual<Shift<[1, 2, 3]>, [2, 3]>,
	AreEqual<Shift<[1]>, []>,
	AreEqual<Shift<[]>, []>,

	AreEqual<_Shift<[1, 2, 3]>, [2, 3]>,
	AreEqual<_Shift<[1]>, []>,
	AreEqual<_Shift<[]>, []>,

	AreEqual<_Shift<"foo">, never>,
	AreEqual<_Shift<{ 0: 1, 1: 2 }>, never>
];
type ShiftWorks = AssertTrue<tests[number]>;