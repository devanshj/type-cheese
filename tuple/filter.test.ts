import { AreEqual, AssertTrue } from "../misc";
import { Filter, _Filter } from "./filter";

type A = "a";
type B = { b: "b" };
type C = [];

type tests = [
    AreEqual<Filter<[1, 2, 1, 3], 1>, [2, 3]>,
    AreEqual<Filter<[1, 2, 1, 3], 0>, [1, 2, 1, 3]>,
    AreEqual<Filter<[[1], [2]], [1]>, [[2]]>,
    AreEqual<Filter<[A, B, C, B], C>, [A, B, B]>,

    AreEqual<_Filter<[1, 2, 1, 3], 1>, [2, 3]>,
    AreEqual<_Filter<[1, 2, 1, 3], 0>, [1, 2, 1, 3]>,
    AreEqual<_Filter<[[1], [2]], [1]>, [[2]]>,
    AreEqual<_Filter<[A, B, C, B], C>, [A, B, B]>,

    AreEqual<_Filter<"foo", [1]>, never>,
    AreEqual<_Filter<B, C>, never>
]
type UnshiftWorks = AssertTrue<tests[number]>