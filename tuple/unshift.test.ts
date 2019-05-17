import { Unshift, _Unshift } from "./unshift";
import { AreEqual, AssertTrue, TypeOf } from "../misc";

type A = "a"
type B = { b: "b" }
type C = []

type tests = [
	AreEqual<Unshift<[1, 2, 3], 0>, [0, 1, 2 ,3]>,
	AreEqual<Unshift<[1], 0>, [0, 1]>,
	AreEqual<Unshift<[], 0>, [0]>,
	AreEqual<Unshift<[], { a: "a" }>, [{ a: "a" }]>,
	AreEqual<Unshift<[A, B], C>, [C, A, B]>,

	AreEqual<_Unshift<[1, 2, 3], 0>, [0, 1, 2 ,3]>,
	AreEqual<_Unshift<[1], 0>, [0, 1]>,
	AreEqual<_Unshift<[], 0>, [0]>,
	AreEqual<_Unshift<[], { a: "a" }>, [{ a: "a" }]>,
	AreEqual<_Unshift<[A, B], C>, [C, A, B]>,

	AreEqual<_Unshift<"foo", C>, never>,
	AreEqual<_Unshift<{ 0: A }, C>, never>
]
type UnshiftWorks = AssertTrue<tests[number]>