import { AreEqual, AssertTrue } from "../misc";
import { Last } from "./last";

type tests = [
	AreEqual<Last<[1, 2, 3]>, 3>,
	AreEqual<Last<[]>, undefined>
]
type LastWorks = AssertTrue<tests[number]>;