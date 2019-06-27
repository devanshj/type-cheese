import { AreEqual, AssertTrue } from "../misc";
import { IndexOf } from "./index-of";

type tests = [
	AreEqual<IndexOf<[1,2,3],2>, 1>,
	AreEqual<IndexOf<[1,2,3],4>, -1>
];

type IndexOfWorks = AssertTrue<tests[number]>;